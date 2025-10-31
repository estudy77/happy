
const menoizedValue = useMemo(
  () => {
    // 연산량이 높은 작업을 수행하여 결과를 반환
    return computeExpensiveValue(의존성변수1, 의존성변수2);
  },
  [의존성변수1, 의존성변수2]

