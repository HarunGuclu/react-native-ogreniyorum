import React from 'react';
import { View, Text, StyleSheet, ScrollView, Platform } from 'react-native';
import { colors } from '@/constants/colors';
import { useAppTheme } from '@/store/theme-store';

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  const theme = useAppTheme();
  
  // Simple markdown parser
  const parseMarkdown = (markdown: string) => {
    const lines = markdown.split('\n');
    const elements: JSX.Element[] = [];
    
    let inCodeBlock = false;
    let codeBlockContent = '';
    let codeBlockLanguage = '';
    
    lines.forEach((line, index) => {
      // Code block handling
      if (line.startsWith('```')) {
        if (!inCodeBlock) {
          inCodeBlock = true;
          codeBlockLanguage = line.slice(3).trim();
          codeBlockContent = '';
        } else {
          elements.push(
            <View 
              key={`code-${index}`} 
              style={[
                styles.codeBlock, 
                { backgroundColor: theme === 'dark' ? '#1E1E1E' : '#F8F9FA' }
              ]}
            >
              <Text 
                style={[
                  styles.code, 
                  { color: theme === 'dark' ? '#E9ECEF' : '#212529' }
                ]}
              >
                {codeBlockContent}
              </Text>
            </View>
          );
          inCodeBlock = false;
        }
        return;
      }
      
      if (inCodeBlock) {
        codeBlockContent += line + '\n';
        return;
      }
      
      // Heading handling
      if (line.startsWith('# ')) {
        elements.push(
          <Text key={`h1-${index}`} style={[styles.h1, { color: colors[theme].text }]}>
            {line.slice(2)}
          </Text>
        );
      } else if (line.startsWith('## ')) {
        elements.push(
          <Text key={`h2-${index}`} style={[styles.h2, { color: colors[theme].text }]}>
            {line.slice(3)}
          </Text>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <Text key={`h3-${index}`} style={[styles.h3, { color: colors[theme].text }]}>
            {line.slice(4)}
          </Text>
        );
      } 
      // List handling
      else if (line.startsWith('- ')) {
        elements.push(
          <View key={`list-${index}`} style={styles.listItem}>
            <Text style={[styles.listBullet, { color: colors[theme].text }]}>•</Text>
            <Text style={[styles.listText, { color: colors[theme].text }]}>
              {line.slice(2)}
            </Text>
          </View>
        );
      }
      // Table handling (very basic)
      else if (line.includes('|')) {
        const isHeader = line.includes('---');
        if (!isHeader) {
          const cells = line.split('|').filter(cell => cell.trim() !== '');
          elements.push(
            <View key={`table-row-${index}`} style={styles.tableRow}>
              {cells.map((cell, cellIndex) => (
                <Text 
                  key={`cell-${cellIndex}`} 
                  style={[
                    styles.tableCell, 
                    { color: colors[theme].text }
                  ]}
                >
                  {cell.trim()}
                </Text>
              ))}
            </View>
          );
        }
      }
      // Regular paragraph
      else if (line.trim() !== '') {
        elements.push(
          <Text key={`p-${index}`} style={[styles.paragraph, { color: colors[theme].text }]}>
            {line}
          </Text>
        );
      }
      // Empty line
      else {
        elements.push(<View key={`space-${index}`} style={styles.emptyLine} />);
      }
    });
    
    return elements;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {parseMarkdown(content)}
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
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  h2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  h3: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginVertical: 8,
  },
  codeBlock: {
    padding: 12,
    borderRadius: 8,
    marginVertical: 12,
  },
  code: {
    fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
    fontSize: 14,
  },
  listItem: {
    flexDirection: 'row',
    marginVertical: 4,
    paddingLeft: 8,
  },
  listBullet: {
    fontSize: 16,
    marginRight: 8,
  },
  listText: {
    fontSize: 16,
    flex: 1,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 8,
  },
  tableCell: {
    flex: 1,
    fontSize: 14,
    paddingHorizontal: 8,
  },
  emptyLine: {
    height: 8,
  },
});