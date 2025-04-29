import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, Platform } from 'react-native';
import { colors } from '@/constants/colors';
import { useAppTheme } from '@/store/theme-store';
import { useProgressStore } from '@/store/progress-store';
import ThemeToggle from '@/components/ThemeToggle';
import { User, BookOpen, Award, Heart, Info, Trash2 } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';

export default function ProfileScreen() {
  const theme = useAppTheme();
  const { completedLessons, completedQuizzes, badges, favorites, resetProgress } = useProgressStore();
  
  const earnedBadges = badges.filter(badge => badge.earned);
  
  const confirmReset = () => {
    Alert.alert(
      'İlerlemeyi Sıfırla',
      'Tüm ilerlemeniz silinecek. Bu işlem geri alınamaz. Devam etmek istiyor musunuz?',
      [
        {
          text: 'İptal',
          style: 'cancel',
        },
        {
          text: 'Sıfırla',
          onPress: () => {
            resetProgress();
            if (Platform.OS !== 'web') {
              Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            }
          },
          style: 'destructive',
        },
      ]
    );
  };

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: colors[theme].background }]}
      contentContainerStyle={styles.content}
    >
      <View style={[styles.profileCard, { backgroundColor: colors[theme].card }]}>
        <View style={[styles.avatarContainer, { backgroundColor: colors[theme].primary }]}>
          <User size={40} color="#fff" />
        </View>
        <Text style={[styles.profileTitle, { color: colors[theme].text }]}>
          React Native Öğrencisi
        </Text>
        <Text style={[styles.profileSubtitle, { color: colors[theme].muted }]}>
          Mobil uygulama geliştirmeyi öğreniyorum
        </Text>
      </View>
      
      <View style={styles.statsContainer}>
        <View style={[styles.statCard, { backgroundColor: colors[theme].card }]}>
          <BookOpen size={24} color={colors[theme].primary} />
          <Text style={[styles.statValue, { color: colors[theme].text }]}>
            {completedLessons.length}
          </Text>
          <Text style={[styles.statLabel, { color: colors[theme].muted }]}>
            Tamamlanan Dersler
          </Text>
        </View>
        
        <View style={[styles.statCard, { backgroundColor: colors[theme].card }]}>
          <Award size={24} color={colors[theme].primary} />
          <Text style={[styles.statValue, { color: colors[theme].text }]}>
            {earnedBadges.length}
          </Text>
          <Text style={[styles.statLabel, { color: colors[theme].muted }]}>
            Kazanılan Rozetler
          </Text>
        </View>
        
        <View style={[styles.statCard, { backgroundColor: colors[theme].card }]}>
          <Heart size={24} color={colors[theme].primary} />
          <Text style={[styles.statValue, { color: colors[theme].text }]}>
            {favorites.length}
          </Text>
          <Text style={[styles.statLabel, { color: colors[theme].muted }]}>
            Favori Dersler
          </Text>
        </View>
      </View>
      
      <Text style={[styles.sectionTitle, { color: colors[theme].text }]}>
        Ayarlar
      </Text>
      
      <View style={[styles.settingsCard, { backgroundColor: colors[theme].card }]}>
        <ThemeToggle />
        
        <TouchableOpacity 
          style={[styles.settingsButton, { borderTopColor: colors[theme].border }]}
          onPress={() => Alert.alert('Hakkında', 'React Native Eğitim Uygulaması v1.0.0')}
          activeOpacity={0.7}
        >
          <Info size={20} color={colors[theme].text} />
          <Text style={[styles.settingsButtonText, { color: colors[theme].text }]}>
            Hakkında
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.settingsButton, { borderTopColor: colors[theme].border }]}
          onPress={confirmReset}
          activeOpacity={0.7}
        >
          <Trash2 size={20} color={colors[theme].error} />
          <Text style={[styles.settingsButtonText, { color: colors[theme].error }]}>
            İlerlemeyi Sıfırla
          </Text>
        </TouchableOpacity>
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
  profileCard: {
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  profileSubtitle: {
    fontSize: 14,
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  settingsCard: {
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  settingsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
  },
  settingsButtonText: {
    fontSize: 16,
    marginLeft: 12,
  },
});