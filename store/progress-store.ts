import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserProgress, Badge } from '@/types';

interface ProgressState extends UserProgress {
  completeLesson: (lessonId: string) => void;
  completeQuiz: (quizId: string) => void;
  earnBadge: (badge: Badge) => void;
  toggleFavorite: (lessonId: string) => void;
  resetProgress: () => void;
}

const initialState: UserProgress = {
  completedLessons: [],
  completedQuizzes: [],
  badges: [],
  favorites: [],
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      ...initialState,
      completeLesson: (lessonId) =>
        set((state) => ({
          completedLessons: state.completedLessons.includes(lessonId)
            ? state.completedLessons
            : [...state.completedLessons, lessonId],
        })),
      completeQuiz: (quizId) =>
        set((state) => ({
          completedQuizzes: state.completedQuizzes.includes(quizId)
            ? state.completedQuizzes
            : [...state.completedQuizzes, quizId],
        })),
      earnBadge: (badge) =>
        set((state) => ({
          badges: state.badges.some((b) => b.id === badge.id)
            ? state.badges
            : [...state.badges, { ...badge, earned: true, earnedAt: new Date().toISOString() }],
        })),
      toggleFavorite: (lessonId) =>
        set((state) => ({
          favorites: state.favorites.includes(lessonId)
            ? state.favorites.filter((id) => id !== lessonId)
            : [...state.favorites, lessonId],
        })),
      resetProgress: () => set(initialState),
    }),
    {
      name: 'progress-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);