export function separateNextline(str: string) {
  return str.split("\n").join("<br />");
}

export function classNames(...classList: string[]) {
  return classList.filter(Boolean).join(" ");
}
