import type { LanguagePack } from "./LanguagePack.js";

export class LanguageRegistry {
    private static packs = new Map<string, LanguagePack>();

    public static register(pack: LanguagePack): void {
        this.packs.set(pack.code, pack);
    }

    public static get(code: string): LanguagePack {
        const pack = this.packs.get(code);
        if (!pack) {
            throw new Error(`Language pack for code "${code}" not found.`);
        }
        return pack;
    }
}
