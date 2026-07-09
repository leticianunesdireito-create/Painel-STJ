import type { CasoSTJ, TemaInfo } from "../types";
import { CaseCard } from "./CaseCard";
import { AccordionSection } from "./AccordionSection";

interface Props {
  tema: TemaInfo;
  casos: CasoSTJ[];
  aberto: boolean;
  onToggle: () => void;
}

export function TemaSection({ tema, casos, aberto, onToggle }: Props) {
  return (
    <AccordionSection tema={tema} count={casos.length} aberto={aberto} onToggle={onToggle}>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {casos.map((caso) => (
          <CaseCard key={caso.id} caso={caso} tema={tema} />
        ))}
      </div>
    </AccordionSection>
  );
}
