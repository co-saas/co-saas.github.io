interface SectionTitleProps {
  primaryText: string;
  secondaryText: string;
}

export default function SectionTitle({ primaryText, secondaryText }: SectionTitleProps) {
  return (
    <h2 className="text-3xl font-semibold text-center">
        {primaryText} <span className="opacity-25">{secondaryText}</span>
    </h2>
  );
}

