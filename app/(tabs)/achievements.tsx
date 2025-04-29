import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '@/constants/colors';
import { useAppTheme } from '@/store/theme-store';
import { useProgressStore } from '@/store/progress-store';
import { badges } from '@/data/courses';
import BadgeCard from '@/components/BadgeCard';
import { Award } from 'lucide-react-native';

export default function AchievementsScreen() {
  const theme = useAppTheme();
  const { badges: userBadges } = useProgressStore();
  
  // Combine data badges with user progress
  const allBadges = badges.map(badge => {
    const userBadge = userBadges.find(b => b.id === badge.id);
    return userBadge || badge;
  });
  
  const earnedBadges = allBadges.filter(badge => badge.earned);
  const lockedBadges = allBadges.filter(badge => !badge.earned);

  return (
    <View style={[styles.container, { backgroundColor: colors[theme].background }]}>
      <FlatList
        data={[...earnedBadges, ...lockedBadges]}
        renderItem={({ item }) => <BadgeCard badge={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <View style={[styles.statsCard, { backgroundColor: colors[theme].card }]}>
              <View style={styles.statsContent}>
                <Award size={40} color={colors[theme].primary} />
                <Text style={[styles.statsTitle, { color: colors[theme].text }]}>
                  {earnedBadges.length} / {allBadges.length}
                </Text>
                <Text style={[styles.statsSubtitle, { color: colors[theme].muted }]}>
                  Rozet Kazanıldı
                </Text>
              </View>
            </View>
            
            <Text style={[styles.sectionTitle, { color: colors[theme].text }]}>
              Tüm Rozetler
            </Text>
          </View>
        )}
        ListEmptyComponent={() => (
          <View style={[styles.emptyContainer, { backgroundColor: colors[theme].card }]}>
            <Award size={60} color={colors[theme].muted} />
            <Text style={[styles.emptyText, { color: colors[theme].text }]}>
              Henüz rozet kazanmadınız
            </Text>
            <Text style={[styles.emptySubtext, { color: colors[theme].muted }]}>
              Dersleri tamamlayarak rozetler kazanabilirsiniz
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
  statsCard: {
    borderRadius: 12,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  statsContent: {
    alignItems: 'center',
  },
  statsTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 4,
  },
  statsSubtitle: {
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  emptyContainer: {
    padding: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    textAlign: 'center',
  },
});