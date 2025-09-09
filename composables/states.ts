/**
 * Auto-imported 상태 관리 컴포저블을 사용하면 type-safe한 전역 상태를 쉽게 생성하고 관리할 수 있다.
 */
export const useCounter = () => useState<number>("counter", () => 0);
export const useColor = () => useState<string>("color", () => "blue");
