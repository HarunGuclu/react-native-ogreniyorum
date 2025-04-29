import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { colors } from '@/constants/colors';
import { useAppTheme } from '@/store/theme-store';
import { courses } from '@/data/courses';
import CourseCard from '@/components/CourseCard';

export default function CoursesScreen() {
  const theme = useAppTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors[theme].background }]}>
      <FlatList
        data={courses}
        renderItem={({ item }) => <CourseCard course={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
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
});