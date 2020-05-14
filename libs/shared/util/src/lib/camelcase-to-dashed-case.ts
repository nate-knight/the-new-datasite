export function camelCaseToDashedCase(camelCase: string): string {
    return camelCase.replace(/[A-Z]/g, m => "-" + m.toLowerCase());
}