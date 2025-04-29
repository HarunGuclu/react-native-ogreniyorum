import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Lesson } from '@/types';
import { colors } from '@/constants/colors';
import { useAppTheme } from '@/store/theme-store';
import { useProgressStore } from '@/store/progress-store';
import { CheckCircle, Circle, Clock, ChevronRight } from 'lucide-react-native';

interface LessonCardProps {
  lesson: Lesson;
  courseId: string;
  topicId: string;
}

export default function LessonCard({ lesson, courseId, topicId }: LessonCardProps) {
  const router = useRouter();
  const theme = useAppTheme();
  const { completedLessons } = useProgressStore();
  
  const isCompleted = completedLessons.includes(lesson.id);

  const handlePress = () => {
    router.push(`/courses/${courseId}/topics/${topicId}/lessons/${lesson.id}`);
  };

  return (
    <TouchableOpacity 
      style={[
        styles.container, 
        { 
          backgroundColor: colors[theme].card,
          borderLeftColor: isCompleted ? colors[theme].success : colors[theme].primary,
        }
      ]} 
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <View style={styles.statusContainer}>
        {isCompleted ? (
          <CheckCircle size={24} color={colors[theme].success} />
        ) : (
          <Circle size={24} color={colors[theme].primary} />
        )}
      </View>
      
      <View style={styles.content}>
        <Text style={[styles.title, { color: colors[theme].text }]}>
          {lesson.title}
        </Text>
        
        <View style={styles.footer}>
          <View style={styles.durationContainer}>
            <Clock size={14} color={colors[theme].muted} />
            <Text style={[styles.duration, { color: colors[theme].muted }]}>
              {lesson.duration}
            </Text>
          </View>
          
          {lesson.quiz && (
            <View style={[styles.quizBadge, { backgroundColor: colors[theme].highlight }]}>
              <Text style={[styles.quizText, { color: colors[theme].primary }]}>
                Quiz
              </Text>
            </View>
          )}
        </View>
      </View>
      
      <ChevronRight size={20} color={colors[theme].muted} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    borderLeftWidth: 4,
  },
  statusContainer: {
    marginRight: 16,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  duration: {
    fontSize: 12,
    marginLeft: 4,
  },
  quizBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    marginLeft: 12,
  },
  quizText: {
    fontSize: 12,
    fontWeight: '500',
  },
});