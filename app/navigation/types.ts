export interface NavProps {
    navigate: (args: string) => void;
    replace: () => void;
    pop: () => void;
}