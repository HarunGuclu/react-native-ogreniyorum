import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { colors } from '@/constants/colors';
import { useAppTheme } from '@/store/theme-store';
import { useProgressStore } from '@/store/progress-store';
import { Quiz } from '@/types';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';

interface QuizComponentProps {
  quiz: Quiz;
  onComplete: () => void;
}

export default function QuizComponent({ quiz, onComplete }: QuizComponentProps) {
  const theme = useAppTheme();
  const { completeQuiz } = useProgressStore();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  
  const currentQuestion = quiz.questions[currentQuestionIndex];
  const totalQuestions = quiz.questions.length;
  
  const handleSelectOption = (optionIndex: number) => {
    if (showResults) return;
    
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestionIndex] = optionIndex;
    setSelectedOptions(newSelectedOptions);
    
    if (Platform.OS !== 'web') {
      Haptics.selectionAsync();
    }
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate results
      let correct = 0;
      quiz.questions.forEach((question, index) => {
        if (selectedOptions[index] === question.correctOptionIndex) {
          correct++;
        }
      });
      
      setCorrectAnswers(correct);
      setShowResults(true);
      completeQuiz(quiz.id);
      
      if (Platform.OS !== 'web') {
        Haptics.notificationAsync(
          correct / totalQuestions >= 0.7 
            ? Haptics.NotificationFeedbackType.Success 
            : Haptics.NotificationFeedbackType.Warning
        );
      }
    }
  };
  
  const handleFinish = () => {
    onComplete();
  };
  
  const isOptionSelected = selectedOptions[currentQuestionIndex] !== undefined;
  
  const renderOptionStatus = (optionIndex: number) => {
    if (!showResults) return null;
    
    const isCorrect = optionIndex === currentQuestion.correctOptionIndex;
    const isSelected = selectedOptions[currentQuestionIndex] === optionIndex;
    
    if (isCorrect) {
      return <CheckCircle size={20} color={colors[theme].success} />;
    } else if (isSelected) {
      return <XCircle size={20} color={colors[theme].error} />;
    }
    
    return null;
  };

  return (
    <View style={styles.container}>
      {!showResults ? (
        <>
          <View style={styles.progressContainer}>
            <Text style={[styles.progressText, { color: colors[theme].text }]}>
              Soru {currentQuestionIndex + 1}/{totalQuestions}
            </Text>
            <View style={[styles.progressBar, { backgroundColor: colors[theme].border }]}>
              <View 
                style={[
                  styles.progressFill, 
                  { 
                    width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`,
                    backgroundColor: colors[theme].primary 
                  }
                ]} 
              />
            </View>
          </View>
          
          <ScrollView style={styles.questionContainer}>
            <Text style={[styles.questionText, { color: colors[theme].text }]}>
              {currentQuestion.text}
            </Text>
            
            <View style={styles.optionsContainer}>
              {currentQuestion.options.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.optionButton,
                    { 
                      backgroundColor: selectedOptions[currentQuestionIndex] === index 
                        ? colors[theme].highlight 
                        : colors[theme].card,
                      borderColor: selectedOptions[currentQuestionIndex] === index 
                        ? colors[theme].primary 
                        : colors[theme].border,
                    }
                  ]}
                  onPress={() => handleSelectOption(index)}
                  activeOpacity={0.7}
                >
                  <Text 
                    style={[
                      styles.optionText, 
                      { 
                        color: selectedOptions[currentQuestionIndex] === index 
                          ? colors[theme].primary 
                          : colors[theme].text 
                      }
                    ]}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
          
          <TouchableOpacity
            style={[
              styles.nextButton,
              { 
                backgroundColor: isOptionSelected ? colors[theme].primary : colors[theme].muted,
                opacity: isOptionSelected ? 1 : 0.5,
              }
            ]}
            onPress={handleNextQuestion}
            disabled={!isOptionSelected}
            activeOpacity={0.7}
          >
            <Text style={styles.nextButtonText}>
              {currentQuestionIndex < totalQuestions - 1 ? 'Sonraki Soru' : 'Tamamla'}
            </Text>
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.resultsContainer}>
          <View style={[
            styles.scoreContainer, 
            { 
              backgroundColor: correctAnswers / totalQuestions >= 0.7 
                ? colors[theme].success 
                : colors[theme].warning 
            }
          ]}>
            <Text style={styles.scoreText}>
              {correctAnswers} / {totalQuestions}
            </Text>
            <Text style={styles.scoreLabel}>Doğru Cevap</Text>
          </View>
          
          <Text style={[styles.resultTitle, { color: colors[theme].text }]}>
            {correctAnswers / totalQuestions >= 0.7 
              ? 'Tebrikler!' 
              : 'Tekrar Deneyin!'}
          </Text>
          
          <Text style={[styles.resultMessage, { color: colors[theme].muted }]}>
            {correctAnswers / totalQuestions >= 0.7 
              ? 'Quiz\'i başarıyla tamamladınız.' 
              : 'Konuyu tekrar gözden geçirmenizi öneririz.'}
          </Text>
          
          <TouchableOpacity
            style={[styles.finishButton, { backgroundColor: colors[theme].primary }]}
            onPress={handleFinish}
            activeOpacity={0.7}
          >
            <Text style={styles.finishButtonText}>Derse Dön</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  progressContainer: {
    marginBottom: 20,
  },
  progressText: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },
  progressBar: {
    height: 6,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
  },
  questionContainer: {
    flex: 1,
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 24,
  },
  optionsContainer: {
    marginBottom: 24,
  },
  optionButton: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
  },
  nextButton: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  resultsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  scoreContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  scoreText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  scoreLabel: {
    color: 'white',
    fontSize: 14,
  },
  resultTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  resultMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
  },
  finishButton: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  finishButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});