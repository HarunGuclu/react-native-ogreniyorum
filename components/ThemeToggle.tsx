import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { colors } from '@/constants/colors';
import { useThemeStore, useAppTheme } from '@/store/theme-store';
import { Sun, Moon } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';

export default function ThemeToggle() {
  const theme = useAppTheme();
  const { toggleTheme } = useThemeStore();

  const handleToggle = () => {
    toggleTheme();
    
    if (Platform.OS !== 'web') {
      Haptics.selectionAsync();
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: colors[theme].card }
      ]}
      onPress={handleToggle}
      activeOpacity={0.7}
    >
      {theme === 'dark' ? (
        <Moon size={20} color={colors[theme].text} />
      ) : (
        <Sun size={20} color={colors[theme].text} />
      )}
      
      <Text style={[styles.text, { color: colors[theme].text }]}>
        {theme === 'dark' ? 'Karanlık Mod' : 'Aydınlık Mod'}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
  },
  text: {
    marginLeft: 8,
    fontSize: 16,
  },
});