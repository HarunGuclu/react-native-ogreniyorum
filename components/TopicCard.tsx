import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Topic } from '@/types';
import { colors } from '@/constants/colors';
import { useAppTheme } from '@/store/theme-store';
import { useProgressStore } from '@/store/progress-store';
import { ChevronRight, BookOpen } from 'lucide-react-native';

interface TopicCardProps {
  topic: Topic;
  courseId: string;
}

export default function TopicCard({ topic, courseId }: TopicCardProps) {
  const router = useRouter();
  const theme = useAppTheme();
  const { completedLessons } = useProgressStore();
  
  const completedCount = topic.lessons.filter(lesson => 
    completedLessons.includes(lesson.id)
  ).length;
  
  const progress = topic.lessons.length > 0 
    ? (completedCount / topic.lessons.length) * 100 
    : 0;

  const handlePress = () => {
    router.push(`/courses/${courseId}/topics/${topic.id}`);
  };

  return (
    <TouchableOpacity 
      style={[
        styles.container, 
        { backgroundColor: colors[theme].card }
      ]} 
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <View style={styles.iconContainer}>
        <BookOpen size={24} color={colors[theme].primary} />
      </View>
      
      <View style={styles.content}>
        <Text style={[styles.title, { color: colors[theme].text }]}>
          {topic.title}
        </Text>
        
        <Text 
          style={[styles.description, { color: colors[theme].muted }]}
          numberOfLines={2}
        >
          {topic.description}
        </Text>
        
        <View style={styles.footer}>
          <View style={styles.progressContainer}>
            <Text style={[styles.progressText, { color: colors[theme].text }]}>
              {completedCount}/{topic.lessons.length} ders tamamlandı
            </Text>
            <View style={[styles.progressBar, { backgroundColor: colors[theme].border }]}>
              <View 
                style={[
                  styles.progressFill, 
                  { 
                    width: `${progress}%`,
                    backgroundColor: colors[theme].primary 
                  }
                ]} 
              />
            </View>
          </View>
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
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressContainer: {
    flex: 1,
    marginRight: 8,
  },
  progressText: {
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 4,
  },
  progressBar: {
    height: 4,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
  },
});