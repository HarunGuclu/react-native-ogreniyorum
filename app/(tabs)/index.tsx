import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { colors } from '@/constants/colors';
import { useAppTheme } from '@/store/theme-store';
import { useProgressStore } from '@/store/progress-store';
import { courses } from '@/data/courses';
import { ChevronRight, BookOpen, Award } from 'lucide-react-native';

export default function HomeScreen() {
  const router = useRouter();
  const theme = useAppTheme();
  const { completedLessons, badges } = useProgressStore();
  
  const totalLessons = courses.reduce(
    (total, course) => total + course.totalLessons, 
    0
  );
  
  const completedPercentage = totalLessons > 0 
    ? Math.round((completedLessons.length / totalLessons) * 100) 
    : 0;
  
  const earnedBadges = badges.filter(badge => badge.earned);
  
  const recentCourses = courses.slice(0, 2);

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: colors[theme].background }]}
      contentContainerStyle={styles.content}
    >
      <View style={styles.header}>
        <Text style={[styles.greeting, { color: colors[theme].text }]}>
          Merhaba!
        </Text>
        <Text style={[styles.subtitle, { color: colors[theme].muted }]}>
          React Native öğrenmeye devam edelim
        </Text>
      </View>
      
      <View style={[styles.progressCard, { backgroundColor: colors[theme].card }]}>
        <View style={styles.progressHeader}>
          <Text style={[styles.progressTitle, { color: colors[theme].text }]}>
            Genel İlerleme
          </Text>
          <View style={[styles.percentageBadge, { backgroundColor: colors[theme].primary }]}>
            <Text style={styles.percentageText}>%{completedPercentage}</Text>
          </View>
        </View>
        
        <View style={[styles.progressBar, { backgroundColor: colors[theme].border }]}>
          <View 
            style={[
              styles.progressFill, 
              { 
                width: `${completedPercentage}%`,
                backgroundColor: colors[theme].primary 
              }
            ]} 
          />
        </View>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <BookOpen size={20} color={colors[theme].primary} />
            <Text style={[styles.statValue, { color: colors[theme].text }]}>
              {completedLessons.length}/{totalLessons}
            </Text>
            <Text style={[styles.statLabel, { color: colors[theme].muted }]}>
              Dersler
            </Text>
          </View>
          
          <View style={styles.statDivider} />
          
          <View style={styles.statItem}>
            <Award size={20} color={colors[theme].primary} />
            <Text style={[styles.statValue, { color: colors[theme].text }]}>
              {earnedBadges.length}
            </Text>
            <Text style={[styles.statLabel, { color: colors[theme].muted }]}>
              Rozetler
            </Text>
          </View>
        </View>
      </View>
      
      <View style={styles.sectionHeader}>
        <Text style={[styles.sectionTitle, { color: colors[theme].text }]}>
          Son Kurslar
        </Text>
        <TouchableOpacity 
          onPress={() => router.push('/courses')}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Text style={[styles.seeAllText, { color: colors[theme].primary }]}>
            Tümünü Gör
          </Text>
        </TouchableOpacity>
      </View>
      
      {recentCourses.map(course => (
        <TouchableOpacity
          key={course.id}
          style={[styles.courseCard, { backgroundColor: colors[theme].card }]}
          onPress={() => router.push(`/courses/${course.id}`)}
          activeOpacity={0.7}
        >
          <Image source={{ uri: course.image }} style={styles.courseImage} />
          <View style={styles.courseContent}>
            <Text style={[styles.courseTitle, { color: colors[theme].text }]}>
              {course.title}
            </Text>
            <Text 
              style={[styles.courseDescription, { color: colors[theme].muted }]}
              numberOfLines={2}
            >
              {course.description}
            </Text>
            <View style={styles.courseFooter}>
              <Text style={[styles.courseDuration, { color: colors[theme].muted }]}>
                {course.duration}
              </Text>
              <ChevronRight size={16} color={colors[theme].muted} />
            </View>
          </View>
        </TouchableOpacity>
      ))}
      
      <View style={styles.sectionHeader}>
        <Text style={[styles.sectionTitle, { color: colors[theme].text }]}>
          Başarılar
        </Text>
        <TouchableOpacity 
          onPress={() => router.push('/achievements')}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Text style={[styles.seeAllText, { color: colors[theme].primary }]}>
            Tümünü Gör
          </Text>
        </TouchableOpacity>
      </View>
      
      <View style={[styles.badgesCard, { backgroundColor: colors[theme].card }]}>
        {earnedBadges.length > 0 ? (
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.badgesList}
          >
            {earnedBadges.map(badge => (
              <View key={badge.id} style={styles.badgeItem}>
                <Image source={{ uri: badge.image }} style={styles.badgeImage} />
                <Text 
                  style={[styles.badgeName, { color: colors[theme].text }]}
                  numberOfLines={1}
                >
                  {badge.title}
                </Text>
              </View>
            ))}
          </ScrollView>
        ) : (
          <View style={styles.noBadgesContainer}>
            <Award size={40} color={colors[theme].muted} />
            <Text style={[styles.noBadgesText, { color: colors[theme].muted }]}>
              Henüz rozet kazanmadınız
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
  },
  progressCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  progressTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  percentageBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  percentageText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
    marginBottom: 16,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#ddd',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllText: {
    fontSize: 14,
  },
  courseCard: {
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  courseImage: {
    width: '100%',
    height: 120,
  },
  courseContent: {
    padding: 12,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  courseDescription: {
    fontSize: 14,
    marginBottom: 8,
  },
  courseFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  courseDuration: {
    fontSize: 12,
  },
  badgesCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  badgesList: {
    paddingVertical: 8,
  },
  badgeItem: {
    alignItems: 'center',
    marginRight: 20,
    width: 80,
  },
  badgeImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  badgeName: {
    fontSize: 12,
    textAlign: 'center',
  },
  noBadgesContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
  },
  noBadgesText: {
    fontSize: 14,
    marginTop: 8,
  },
});