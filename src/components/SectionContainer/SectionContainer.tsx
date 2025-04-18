interface SectionContainerProps {
  children: React.ReactNode;
}

export const SectionContainer = ({ children }: SectionContainerProps) => <div className="px-8 py-4">{children}</div>