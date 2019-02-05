# Drug Synergy score methology

Basic idea for judge interaction between drugs:

1. compare observed combination response to expected effect (non-interaction predicted by **reference model**)
2. Classify drug interactions:
    * Synergistic: observed response > expected effect
    * Antagonistic: observed response < expected effect
    * Non-interactive: observed response = expected effect

## ZIP (**z**ore **i**nteraction **p**otency)

> Searching for Drug Synergy in Complex Dose-Response Landscapes Using an Interaction Potency Model
> Bhagwan Yadav, Krister Wennerberg, Tero Aittokallio, Jing Tang

Assumption: two non-interactiving drugs are expected to incur minimal chages in their dose-response curves.

Defination:

* Drugs effect: fractional **inhibition** of cell growth or percentage of cell death
 

## HSA

Assumption: expected combination effect equals to the higher individual drug effect at the dose in the combination.

## Loewe

Assumption: expected effect as if a drug was combined with itself.

## Bliss

Assumption: 