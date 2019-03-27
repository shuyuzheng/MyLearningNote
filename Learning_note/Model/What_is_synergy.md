# What is Synergy? The Saariselkä agreement revisited

A [review](https://www.frontiersin.org/articles/10.3389/fphar.2015.00181/full)  
Author: Jing Tang; Krister Wennerburg and Tero Aittokallio
Publish date: 2015-09-01

## Question

How to estimate synergy between two drugs?

## General solution

1. Figure out a reference model for null hypothesis of non-interaction.
2. Compare observed response to the expected response based on null hypothesis.

## Problem

Different reference model generate different interpretation of synergy.  
How to choose and define the null hypothesis (or reference model)?

### Reference models

* **Additive Dose (ADM)**
  * Alias:
    * Concentration addition (CA)
    * effect summation
    * dose addition
    * mutually exclusive
    * Loewe
  * Assumptions:
    * an additive behavior of doses
    * similar modes of action
    * consequently parallel dose-response curves with identical slopes.
    * _implicitly_: the maximum possible effect achievable by the mixture is that of its most potent partner.
  * basic concept: Equipotent doses (An arbitrary dose of a.i. A can be **replaced** by an isoeffective dose of a.i. B.) 
    * A generalized concentration addition (GCA) model: extended the original ADM approach to mixtures with partially overlapping agonists.
* **Multiplicative Survival (MSM)**
    * Alias:
        * Independent action (IA) 
        * Colby and Limpel (agrochemical)
        * Bliss and Finney (toxicology)
        * Abbott (Entomoldgy)
    * Assumptions:
        * The effects caused by two a.i.s are _mutually non-exclusive_
        * The effects originate from different modes of action.
        * The asymptotically achievable effect is the sum of the individually possible ones.
* **Chou**(Combination indices cover both classes)
    * Mutually exclusive combination: ADM type
    * Mutually non-exclusive mixtures: MSM like and reduces to Colby's formula for reaction orders of one.
2. Problem of these solutions: Different reference models

