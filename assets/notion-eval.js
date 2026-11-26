import { cases } from "./notion-cases.js";

const rules = [
  { id: "sarcasm", label: "Sarcasm Detection Rule", errors: ["Sarcasm Misclassification"] },
  { id: "grounding", label: "Strict Evidence-Span Grounding (Anti-Hallucination)", errors: ["Policy Detail Omission", "Misleading Framing Missed", "Hallucinated Attribution"] },
  { id: "entities", label: "Competitor & Churn Entity Extraction", errors: ["Churn Signal Missed", "Competitor Migration Missed"] },
];

const active = new Set();
const dialog = document.querySelector("#community-eval");
const rows = dialog.querySelector("tbody");
const stats = dialog.querySelector(".eval-stats");
const breakdown = dialog.querySelector(".eval-breakdown");
const ruleList = dialog.querySelector(".eval-rules");

function cell(row, text, className) {
  const element = row.insertCell();
  element.textContent = text;
  if (className) element.className = className;
}

function render() {
  rows.replaceChildren();
  breakdown.replaceChildren();
  const remaining = new Map();
  let passes = 0;
  let flagged = 0;
  for (const item of cases) {
    const applied = rules.some(({id, errors}) => active.has(id) && errors.includes(item.error_type));
    const review = applied && item.human_verdict.startsWith("HITL");
    if (review) flagged++;
    else if (applied) passes++;
    else remaining.set(item.error_type, (remaining.get(item.error_type) ?? 0) + 1);
    const row = rows.insertRow();
    cell(row, item.id + "\n" + item.error_type);
    cell(row, item.raw_quote, "eval-quote");
    cell(row, item.v1_output + "\n\n" + item.v1_failure);
    cell(row, item.v2_output + "\n\nEvidence spans: " + item.evidence_span.join(" · "));
    cell(row, review ? item.human_verdict : applied ? "Pass · V2 selected" : "Fail · V1 selected", review ? "eval-review" : applied ? "eval-pass" : "eval-fail");
  }
  const percentage = (n) => (100 * n / cases.length).toFixed(1) + "%";
  for (const [id, value] of Object.entries({
    pass: percentage(passes),
    hallucinations: percentage(remaining.get("Hallucinated Attribution") ?? 0),
    flagged: String(flagged),
  })) stats.querySelector(`[data-metric="${id}"]`).textContent = value;

  if (!remaining.size) {
    breakdown.textContent = flagged ? "No V1 failures selected · 1 case routed to human review" : "No open cases";
  } else {
    for (const [name, count] of remaining) {
      const tag = document.createElement("span");
      tag.textContent = `${name} · ${count}`;
      breakdown.append(tag);
    }
  }
}

for (const rule of rules) {
  const label = document.createElement("label");
  const toggle = document.createElement("input");
  toggle.type = "checkbox";
  toggle.addEventListener("change", () => {
    if (toggle.checked) active.add(rule.id);
    else active.delete(rule.id);
    render();
  });
  label.append(toggle, rule.label);
  ruleList.append(label);
}

function open() {
  if (!dialog.open) dialog.showModal();
}

document.querySelector("#open-community-eval").addEventListener("click", open);
dialog.querySelector("[data-close]").addEventListener("click", () => dialog.close());
dialog.querySelector("[data-export]").addEventListener("click", () => {
  const body = cases.map((item) => JSON.stringify(item)).join("\n") + "\n";
  const url = URL.createObjectURL(new Blob([body], { type: "application/x-ndjson" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "notion-2026-eval.jsonl";
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});
render();
