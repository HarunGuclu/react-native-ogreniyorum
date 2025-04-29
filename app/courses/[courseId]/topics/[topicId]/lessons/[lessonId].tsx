import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Platform, Text } from 'react-native';
import { useLocalSearchParams, Stack, useRouter } from 'expo-router';
import { colors } from '@/constants/colors';
import { useAppTheme } from '@/store/theme-store';
import { useProgressStore } from '@/store/progress-store';
import { courses, badges } from '@/data/courses';
import MarkdownContent from '@/components/MarkdownContent';
import CodeBlock from '@/components/CodeBlock';
import QuizComponent from '@/components/QuizComponent';
import { Heart, BookOpen, CheckCircle } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';

export default function LessonDetailScreen() {
  const { courseId, topicId, lessonId } = useLocalSearchParams<{ 
    courseId: string; 
    topicId: string; 
    lessonId: string;
  }>();
  const router = useRouter();
  const theme = useAppTheme();
  const { 
    completedLessons, 
    favorites, 
    completeLesson, 
    toggleFavorite,
    earnBadge
  } = useProgressStore();
  
  const [showQuiz, setShowQuiz] = useState(false);
  
  const course = courses.find(c => c.id === courseId);
  const topic = course?.topics.find(t => t.id === topicId);
  const lesson = topic?.lessons.find(l => l.id === lessonId);
  
  if (!course || !topic || !lesson) {
    return null;
  }
  
  const isCompleted = completedLessons.includes(lessonId);
  const isFavorite = favorites.includes(lessonId);
  
  const handleComplete = () => {
    if (!isCompleted) {
      completeLesson(lessonId);
      
      // Check if all lessons in topic are completed
      const allTopicLessonsCompleted = topic.lessons.every(
        l => l.id === lessonId || completedLessons.includes(l.id)
      );
      
      // Check if all lessons in course are completed
      const allCourseLessonsCompleted = course.topics.every(t => 
        t.lessons.every(l => 
          (t.id === topicId && l.id === lessonId) || completedLessons.includes(l.id)
        )
      );
      
      // Award badges based on completion
      if (allTopicLessonsCompleted) {
        const topicBadge = badges.find(b => 
          b.id === `${course.id}-${topic.id}` || 
          b.id.includes(topic.title.toLowerCase().replace(/\s+/g, '-'))
        );
        
        if (topicBadge) {
          earnBadge(topicBadge);
          if (Platform.OS !== 'web') {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
          }
        }
      }
      
      if (allCourseLessonsCompleted) {
        const courseBadge = badges.find(b => 
          b.id === course.id || 
          b.id.includes(course.title.toLowerCase().replace(/\s+/g, '-'))
        );
        
        if (courseBadge) {
          earnBadge(courseBadge);
          if (Platform.OS !== 'web') {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
          }
        }
      }
    }
    
    if (lesson.quiz) {
      setShowQuiz(true);
    } else {
      router.back();
    }
  };
  
  const handleToggleFavorite = () => {
    toggleFavorite(lessonId);
    if (Platform.OS !== 'web') {
      Haptics.selectionAsync();
    }
  };
  
  const handleQuizComplete = () => {
    router.back();
  };

  return (
    <View style={[styles.container, { backgroundColor: colors[theme].background }]}>
      <Stack.Screen 
        options={{
          title: lesson.title,
          headerRight: () => (
            <TouchableOpacity 
              onPress={handleToggleFavorite}
              style={styles.favoriteButton}
            >
              <Heart 
                size={24} 
                color={isFavorite ? colors[theme].error : colors[theme].text}
                fill={isFavorite ? colors[theme].error : 'transparent'}
              />
            </TouchableOpacity>
          ),
        }} 
      />
      
      {showQuiz ? (
        <QuizComponent quiz={lesson.quiz!} onComplete={handleQuizComplete} />
      ) : (
        <>
          <ScrollView style={styles.scrollView}>
            <MarkdownContent content={lesson.content} />
            
            {lesson.codeExamples.map(example => (
              <CodeBlock key={example.id} codeExample={example} />
            ))}
          </ScrollView>
          
          <View style={[styles.footer, { backgroundColor: colors[theme].card }]}>
            <TouchableOpacity
              style={[
                styles.completeButton,
                { backgroundColor: isCompleted ? colors[theme].success : colors[theme].primary }
              ]}
              onPress={handleComplete}
              activeOpacity={0.7}
            >
              {isCompleted ? (
                <CheckCircle size={20} color="#fff" />
              ) : (
                <BookOpen size={20} color="#fff" />
              )}
              <View style={styles.buttonTextContainer}>
                <Text style={styles.completeButtonText}>
                  {isCompleted 
                    ? (lesson.quiz ? "Quiz'i Tekrar Çöz" : "Tamamlandı") 
                    : (lesson.quiz ? "Tamamla ve Quiz'e Başla" : "Dersi Tamamla")}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  favoriteButton: {
    padding: 8,
    marginRight: 8,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  completeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 8,
  },
  buttonTextContainer: {
    marginLeft: 8,
  },
  completeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});