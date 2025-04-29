import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colors } from '@/constants/colors';
import { useAppTheme } from '@/store/theme-store';
import { Badge } from '@/types';
import { Lock } from 'lucide-react-native';

interface BadgeCardProps {
  badge: Badge;
}

export default function BadgeCard({ badge }: BadgeCardProps) {
  const theme = useAppTheme();

  return (
    <View style={[
      styles.container, 
      { 
        backgroundColor: colors[theme].card,
        borderColor: badge.earned ? colors[theme].success : colors[theme].border,
      }
    ]}>
      <View style={styles.imageContainer}>
        {badge.earned ? (
          <Image 
            source={{ uri: badge.image }} 
            style={styles.image} 
            resizeMode="cover"
          />
        ) : (
          <View style={[styles.lockedContainer, { backgroundColor: colors[theme].muted }]}>
            <Lock size={24} color="#fff" />
          </View>
        )}
      </View>
      
      <View style={styles.content}>
        <Text style={[styles.title, { color: colors[theme].text }]}>
          {badge.title}
        </Text>
        
        <Text style={[styles.description, { color: colors[theme].muted }]}>
          {badge.description}
        </Text>
        
        {badge.earned && badge.earnedAt && (
          <Text style={[styles.earnedAt, { color: colors[theme].success }]}>
            {new Date(badge.earnedAt).toLocaleDateString('tr-TR')} tarihinde kazanıldı
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
    marginRight: 16,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  lockedContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
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
    marginBottom: 8,
  },
  earnedAt: {
    fontSize: 12,
    fontWeight: '500',
  },
});