---
title: "Theory of synergistic effects: Hill-type response surfaces as 'null-interaction' models for mixtures"
author: Shuyu
date: 4th. October. 2018
output:
    word_document:
        path: C:/Users/zsy/Documents/google_drive/Notes/Paper reading/Hill-type response surfaces.docx
---

* Author: Michael schindler
* Journal: Theoretical Biology ans Medical Modeling
* Year: 2017
* DOI: 10.1186/s12976-017-0060-y

---
# Background:
1. The classification of effects caused by mixture of agents:
    * synergistic: 1 + 1 > 2
    * antagonistic: 1 + 1 < 2
    * additive: 1 + 1 = 2
2. Terms: 'agent' = 'drug' = 'chemical' = 'a.i.'
3. Generally, biological effects of an a.i. follow a **dose-response** relation.
4. Steps of quantifying drug interaction effect:
    1. Define a reference behavior (null-interaction): the response of a system of compounds acting independently
    2. Quantify the deviations from this reference: Synergistic or antagonistic.
        * The factors involved in these deviation: **physico-chemical** and **biochemical** effects.

# Problem
how to correctly define this reference of ‘no-interaction’.

# Previous solutions:
1. Previous 'Null interaction' reference model: estimates additive effects
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
2. Problem of these solutions:
    * The observed effects like zero interaction, synergism or antagonism, are often quantified by calculating interaction- or combination-indices, however, often based on differing definitions of additivity.

# Solutions given by this article:
* **Logistic (Hill) response surfaces** as 'null-effect' models
* Basic idea:
    * Sigmoid dose-response curves like Hill's equation are solutions of a class of ordinary differential equation(ODEs)
    * Hill's equation can be obtained by solving a first-order ODE, the logistic differential equation.
    * It's n-dimensional generalization results from solving a semilinear PDE with the appropriate boundary conditions.
    * 
* Advantages:
    * For mixtures of n partners they result from solving an n-dimensional partial differential equation (PDE).
    * Appropriate boundary conditions guarantee that the expressions describing the Hill-surfaces are asymptotically correct
    * The solutions are sham-compliant, meaning that a mixture consisting of combinations of a drug with itself shows no no synergistic effect.
