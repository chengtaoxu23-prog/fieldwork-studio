export const cases = [
  {
    "id": "NOTION-01",
    "error_type": "Sarcasm Misclassification",
    "raw_quote": "I like paying 700% more for my tokens. That's Notion credits.",
    "v1_output": "Sentiment: Positive | Theme: Pricing Acceptance",
    "v1_failure": "Took sarcasm literally",
    "v2_output": "Sentiment: Strongly Negative (Sarcasm) | Theme: Token Markup Backlash | Evidence: \"paying 700% more for my tokens\"",
    "evidence_span": [
      "paying 700% more for my tokens"
    ],
    "human_verdict": "Accept V2 reference"
  },
  {
    "id": "NOTION-02",
    "error_type": "Churn Signal Missed",
    "raw_quote": "I have been charged for AI three times: $10 add-on -> Business plan upgrade -> now metered credits for Custom Agents. This is enshittification.",
    "v1_output": "Theme: Billing Question | Churn Risk: Medium",
    "v1_failure": "Underestimated cumulative paywall fatigue",
    "v2_output": "Theme: Multi-Tier Paywall Fatigue | Churn Risk: Critical | Evidence: \"charged for AI three times... metered credits\"",
    "evidence_span": [
      "charged for AI three times... metered credits"
    ],
    "human_verdict": "Accept V2 reference"
  },
  {
    "id": "NOTION-03",
    "error_type": "Policy Detail Omission",
    "raw_quote": "30,000-credit monthly cap vs 3,000-credit rolling 6-hour limit means you can only hit your daily allowance 10 times a month.",
    "v1_output": "Theme: Usage Limit Complaint",
    "v1_failure": "Lost exact quota math",
    "v2_output": "Theme: Quota Math & Rate-Limit Friction | Detail: 30k/mo vs 3k/6hr rolling cap (max 10 heavy days/mo)",
    "evidence_span": [
      "30,000-credit monthly cap",
      "3,000-credit rolling 6-hour limit"
    ],
    "human_verdict": "Accept V2 reference"
  },
  {
    "id": "NOTION-04",
    "error_type": "Misleading Framing Missed",
    "raw_quote": "Forcing us into AUTO mode and calling it '90% lower cost'—it's 90% cheaper for Notion, not users, stripping our model choice.",
    "v1_output": "Theme: Feature Update Feedback",
    "v1_failure": "Missed trust erosion & model-lock resentment",
    "v2_output": "Theme: Trust Erosion & Model Lock-In | Evidence: \"90% cheaper for Notion, not users, stripping our model choice\"",
    "evidence_span": [
      "90% cheaper for Notion, not users, stripping our model choice"
    ],
    "human_verdict": "Accept V2 reference"
  },
  {
    "id": "NOTION-05",
    "error_type": "Competitor Migration Missed",
    "raw_quote": "After 5+ years I'm switching to Anytype/Obsidian + Claude MCP locally. At least my notes aren't held hostage by credit meters.",
    "v1_output": "Theme: General Dissatisfaction",
    "v1_failure": "Failed to extract named competitors & local-first trigger",
    "v2_output": "Theme: Active Competitor Churn | Targets: Anytype, Obsidian + Claude MCP | Trigger: Local-first / No credit metering",
    "evidence_span": [
      "switching to Anytype/Obsidian + Claude MCP locally"
    ],
    "human_verdict": "Accept V2 reference"
  },
  {
    "id": "NOTION-06",
    "error_type": "Hallucinated Attribution",
    "raw_quote": "Our 12-person design team burned through the monthly pool in 4 days just summarizing meeting notes. Finance froze the renewal.",
    "v1_output": "Theme: Team Training Needed | Cause: Users don't understand prompt engineering",
    "v1_failure": "Hallucinated user error not in text",
    "v2_output": "Theme: Enterprise Renewal Blocker | Cause: Predictability failure on routine workflows | Evidence: \"burned through... in 4 days... Finance froze the renewal\"",
    "evidence_span": [
      "burned through... in 4 days... Finance froze the renewal"
    ],
    "human_verdict": "Accept V2 reference"
  },
  {
    "id": "NOTION-07",
    "error_type": "Sarcasm Misclassification",
    "raw_quote": "Love how my 'unlimited' workspace now comes with a gas gauge that ticks down every time I fix a typo.",
    "v1_output": "Sentiment: Positive | Theme: UI Feedback",
    "v1_failure": "Missed sarcasm",
    "v2_output": "Sentiment: Negative (Sarcasm) | Theme: Micro-Transaction Anxiety | Evidence: \"'unlimited' workspace now comes with a gas gauge\"",
    "evidence_span": [
      "'unlimited' workspace now comes with a gas gauge"
    ],
    "human_verdict": "Accept V2 reference"
  },
  {
    "id": "NOTION-08",
    "error_type": "Policy Detail Omission",
    "raw_quote": "If I buy top-up credits and don't use them by the billing cycle, they vanish. Meanwhile API tokens at Anthropic cost a fraction.",
    "v1_output": "Theme: Pricing Comparison",
    "v1_failure": "Missed credit expiration policy + direct API price anchor",
    "v2_output": "Theme: Credit Expiration Friction & API Price Anchor | Evidence: \"don't use them... they vanish\" + \"Anthropic API\"",
    "evidence_span": [
      "don't use them... they vanish",
      "Anthropic API"
    ],
    "human_verdict": "HITL Flagged: Verify Enterprise Rollover Exception"
  },
  {
    "id": "NOTION-09",
    "error_type": "Churn Signal Missed",
    "raw_quote": "We're keeping Notion strictly as a static wiki and moving all AI workflows to Cursor and ChatGPT Teams.",
    "v1_output": "Theme: Retained Account",
    "v1_failure": "Missed seat/ARPU downgrade & AI feature abandonment",
    "v2_output": "Theme: Feature Abandonment / ARPU Downgrade | Competitors: Cursor, ChatGPT Teams | Evidence: \"strictly as a static wiki\"",
    "evidence_span": [
      "strictly as a static wiki"
    ],
    "human_verdict": "Accept V2 reference"
  },
  {
    "id": "NOTION-10",
    "error_type": "Hallucinated Attribution",
    "raw_quote": "Support couldn't even tell me which Custom Agent step consumed 400 credits. Zero transparency.",
    "v1_output": "Theme: Support Response Time",
    "v1_failure": "Invented latency complaint; real issue is token-usage observability",
    "v2_output": "Theme: Credit Consumption Observability Gap | Evidence: \"couldn't even tell me which Custom Agent step consumed 400 credits\"",
    "evidence_span": [
      "couldn't even tell me which Custom Agent step consumed 400 credits"
    ],
    "human_verdict": "Accept V2 reference"
  },
  {
    "id": "NOTION-11",
    "error_type": "Competitor Migration Missed",
    "raw_quote": "Coda and Linear don't punish me for automating my own backlog. Cancelling Business plan before next Friday.",
    "v1_output": "Theme: Pricing Feedback",
    "v1_failure": "Missed explicit cancellation deadline & Coda/Linear mentions",
    "v2_output": "Theme: Imminent Churn | Deadline: Next Friday | Competitors: Coda, Linear",
    "evidence_span": [
      "Coda and Linear",
      "Cancelling Business plan before next Friday"
    ],
    "human_verdict": "Accept V2 reference"
  },
  {
    "id": "NOTION-12",
    "error_type": "Sarcasm Misclassification",
    "raw_quote": "Bravo to the PM who thought turning a note-taking app into a slot machine was a growth hack.",
    "v1_output": "Sentiment: Positive | Theme: Product Praise",
    "v1_failure": "Missed sarcasm",
    "v2_output": "Sentiment: Negative (Sarcasm) | Theme: Pricing Unpredictability (\"Slot Machine\") | Evidence: \"turning a note-taking app into a slot machine\"",
    "evidence_span": [
      "turning a note-taking app into a slot machine"
    ],
    "human_verdict": "Accept V2 reference"
  }
];
