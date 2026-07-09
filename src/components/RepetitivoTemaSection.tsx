import type { Repetitivo, TemaInfo } from "../types";
import { RepetitivoCard } from "./RepetitivoCard";
import { AccordionSection } from "./AccordionSection";

interface Props {
  tema: TemaInfo;
  repetitivos: Repetitivo[];
  aberto: boolean;
  onToggle: () => void;
}

export function RepetitivoTemaSection({ tema, repetitivos, aberto, onToggle }: Props) {
  return (
    <AccordionSection tema={tema} count={repetitivos.length} aberto={aberto} onToggle={onToggle}>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {repetitivos.map((rep) => (
          <RepetitivoCard key={rep.numero} repetitivo={rep} />
        ))}
      </div>
    </AccordionSection>
  );
}
