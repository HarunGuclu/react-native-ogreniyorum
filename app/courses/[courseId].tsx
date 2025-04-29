import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { colors } from '@/constants/colors';
import { useAppTheme } from '@/store/theme-store';
import { useProgressStore } from '@/store/progress-store';
import { courses } from '@/data/courses';
import TopicCard from '@/components/TopicCard';
import { Clock, BookOpen } from 'lucide-react-native';

export default function CourseDetailScreen() {
  const { courseId } = useLocalSearchParams<{ courseId: string }>();
  const theme = useAppTheme();
  const { completedLessons } = useProgressStore();
  
  const course = courses.find(c => c.id === courseId);
  
  if (!course) {
    return (
      <View style={[styles.container, { backgroundColor: colors[theme].background }]}>
        <Text style={[styles.errorText, { color: colors[theme].text }]}>
          Kurs bulunamadı
        </Text>
      </View>
    );
  }
  
  const completedCount = course.topics.flatMap(topic => 
    topic.lessons.filter(lesson => 
      completedLessons.includes(lesson.id)
    )
  ).length;
  
  const progress = course.totalLessons > 0 
    ? (completedCount / course.totalLessons) * 100 
    : 0;

  return (
    <View style={[styles.container, { backgroundColor: colors[theme].background }]}>
      <FlatList
        data={course.topics}
        renderItem={({ item }) => <TopicCard topic={item} courseId={course.id} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Image source={{ uri: course.image }} style={styles.courseImage} />
            
            <View style={styles.courseInfo}>
              <Text style={[styles.courseTitle, { color: colors[theme].text }]}>
                {course.title}
              </Text>
              
              <Text style={[styles.courseDescription, { color: colors[theme].muted }]}>
                {course.description}
              </Text>
              
              <View style={styles.metaContainer}>
                <View style={styles.metaItem}>
                  <Clock size={16} color={colors[theme].muted} />
                  <Text style={[styles.metaText, { color: colors[theme].muted }]}>
                    {course.duration}
                  </Text>
                </View>
                
                <View style={styles.metaItem}>
                  <BookOpen size={16} color={colors[theme].muted} />
                  <Text style={[styles.metaText, { color: colors[theme].muted }]}>
                    {course.totalLessons} Ders
                  </Text>
                </View>
                
                <View style={[styles.levelBadge, { backgroundColor: colors[theme].primary }]}>
                  <Text style={styles.levelText}>{course.level}</Text>
                </View>
              </View>
              
              <View style={styles.progressContainer}>
                <View style={styles.progressInfo}>
                  <Text style={[styles.progressText, { color: colors[theme].text }]}>
                    İlerleme
                  </Text>
                  <Text style={[styles.progressPercentage, { color: colors[theme].primary }]}>
                    %{Math.round(progress)}
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
            </View>
            
            <Text style={[styles.topicsTitle, { color: colors[theme].text }]}>
              Konular
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    padding: 16,
  },
  header: {
    marginBottom: 16,
  },
  courseImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  courseInfo: {
    marginBottom: 24,
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  courseDescription: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
  metaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  metaText: {
    fontSize: 14,
    marginLeft: 4,
  },
  levelBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  levelText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  progressContainer: {
    marginBottom: 8,
  },
  progressInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressText: {
    fontSize: 16,
    fontWeight: '500',
  },
  progressPercentage: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
  },
  topicsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  errorText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 40,
  },
});