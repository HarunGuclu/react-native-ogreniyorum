import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { colors } from '@/constants/colors';
import { useAppTheme } from '@/store/theme-store';
import { CodeExample } from '@/types';
import { Copy, Check } from 'lucide-react-native';
import * as Clipboard from 'expo-clipboard';
import * as Haptics from 'expo-haptics';

interface CodeBlockProps {
  codeExample: CodeExample;
}

export default function CodeBlock({ codeExample }: CodeBlockProps) {
  const theme = useAppTheme();
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(codeExample.code);
    setCopied(true);
    
    if (Platform.OS !== 'web') {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    }
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme === 'dark' ? '#1E1E1E' : '#F8F9FA' }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors[theme].text }]}>
          {codeExample.title}
        </Text>
        <TouchableOpacity 
          style={styles.copyButton} 
          onPress={copyToClipboard}
          activeOpacity={0.7}
        >
          {copied ? (
            <Check size={16} color={colors[theme].success} />
          ) : (
            <Copy size={16} color={colors[theme].muted} />
          )}
        </TouchableOpacity>
      </View>
      
      {codeExample.description && (
        <Text style={[styles.description, { color: colors[theme].muted }]}>
          {codeExample.description}
        </Text>
      )}
      
      <ScrollView 
        horizontal 
        style={styles.codeScrollView}
        showsHorizontalScrollIndicator={false}
      >
        <View style={[
          styles.codeContainer, 
          { backgroundColor: theme === 'dark' ? '#121212' : '#F1F3F5' }
        ]}>
          <Text style={[
            styles.code, 
            { color: theme === 'dark' ? '#E9ECEF' : '#212529' }
          ]}>
            {codeExample.code}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    marginVertical: 16,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
  },
  copyButton: {
    padding: 4,
  },
  description: {
    fontSize: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  codeScrollView: {
    maxHeight: 300,
  },
  codeContainer: {
    padding: 12,
    minWidth: '100%',
  },
  code: {
    fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
    fontSize: 12,
  },
});