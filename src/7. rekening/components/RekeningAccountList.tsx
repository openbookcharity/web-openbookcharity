import { SITE_CONTACT } from "@/shared/config/contact";
import { useI18n } from "@/shared/i18n/LanguageProvider";
import { REKENING_SETTINGS } from "../settings/rekening.settings";

export function RekeningAccountList() {
  const { m } = useI18n();

  return (
    <ul className="divide-y divide-border">
      {REKENING_SETTINGS.banks.map((bank) => (
        <li key={bank.id} className="flex items-center gap-3 py-2.5">
          {"logo" in bank && bank.logo ? (
            <span className="flex h-10 w-16 shrink-0 items-center justify-center rounded-md bg-white px-1.5">
              <img src={bank.logo} alt={bank.name} className="h-6 w-auto object-contain" />
            </span>
          ) : (
            <span className="flex h-10 w-16 shrink-0 items-center justify-center rounded-md bg-muted text-center text-[10px] font-bold leading-tight text-navy">
              {bank.name}
            </span>
          )}
          <div className="min-w-0">
            <p className="text-sm font-semibold text-navy">{m.rekening.numberSoon}</p>
            <p className="text-xs text-muted-foreground">
              {m.rekening.holderPrefix} {SITE_CONTACT.rekeningHolder}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
