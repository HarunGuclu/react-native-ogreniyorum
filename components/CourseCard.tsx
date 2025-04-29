import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Course } from '@/types';
import { colors } from '@/constants/colors';
import { useAppTheme } from '@/store/theme-store';
import { useProgressStore } from '@/store/progress-store';
import { ChevronRight } from 'lucide-react-native';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const router = useRouter();
  const theme = useAppTheme();
  const { completedLessons } = useProgressStore();
  
  const completedCount = course.topics.flatMap(topic => 
    topic.lessons.filter(lesson => 
      completedLessons.includes(lesson.id)
    )
  ).length;
  
  const progress = course.totalLessons > 0 
    ? (completedCount / course.totalLessons) * 100 
    : 0;

  const handlePress = () => {
    router.push(`/courses/${course.id}`);
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
      <Image source={{ uri: course.image }} style={styles.image} />
      
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={[styles.title, { color: colors[theme].text }]}>
            {course.title}
          </Text>
          <View style={[styles.levelBadge, { backgroundColor: colors[theme].primary }]}>
            <Text style={styles.levelText}>{course.level}</Text>
          </View>
        </View>
        
        <Text 
          style={[styles.description, { color: colors[theme].muted }]}
          numberOfLines={2}
        >
          {course.description}
        </Text>
        
        <View style={styles.footer}>
          <View style={styles.progressContainer}>
            <View style={styles.progressInfo}>
              <Text style={[styles.progressText, { color: colors[theme].text }]}>
                {completedCount}/{course.totalLessons} ders tamamlandı
              </Text>
              <Text style={[styles.duration, { color: colors[theme].muted }]}>
                {course.duration}
              </Text>
            </View>
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
          
          <ChevronRight size={20} color={colors[theme].muted} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 160,
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  levelBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginLeft: 8,
  },
  levelText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  description: {
    fontSize: 14,
    marginBottom: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressContainer: {
    flex: 1,
    marginRight: 8,
  },
  progressInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  progressText: {
    fontSize: 12,
    fontWeight: '500',
  },
  duration: {
    fontSize: 12,
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