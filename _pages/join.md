---
og_image: https://zpschang.github.io/assets/img/og/og-join-en.png
layout: page
title: Join Us
description: Research on foundation models, data, and agent infrastructure for physical AGI.
permalink: /join/
keywords: Pushi Zhang, 张蒲石, physical AGI, embodied AI, robot foundation models, research collaboration
lang: en
alt_url: /cn/join/
nav: true
nav_order: 2
title_zh: 加入我们
permalink_zh: /cn/join/
---

## Vision

We believe that physical AGI will be the most profound technological shift after language intelligence: general intelligence that understands the physical world and acts reliably in open environments. It will greatly raise society's productivity, build the infrastructure that closes the loop between intelligence and the physical world, and accelerate breakthroughs in fundamental science, to the benefit of everyone.

## Why It Is Hard, and How We Approach It

### Data: the full loop is hard to obtain

General physical intelligence needs more than action data. It needs data that covers the full loop of perception, language understanding, chain-of-thought reasoning, action execution, and feedback from the world. Most existing data covers only one or two of these links:

- internet data has perception and language, but no action or feedback;
- teleoperation data has perception and action, but lacks verbalized intent, reasoning, and assessments of outcomes.

The difficulty is to capture high-quality signals for every link of the loop, at scale and consistently across embodiments, and to align them in time and meaning. We build data systems that close this loop.

### Models: many timescales at once

Physical intelligence requires:

- long-horizon memory, to track task state over minutes;
- slow System 2 deliberation for planning and reasoning, grounded into high-frequency System 1 policies and lower-level System 0 motor control;
- asynchronous execution across these levels, so that thinking never blocks acting;
- multimodal in-context learning, to adapt on the fly from a few demonstrations or corrections.

Most current vision-language-action models run at a single frequency, with short context and synchronous inference, and cannot meet all of these requirements at once. We design model architectures that treat these capabilities as first-class.

### Models and robots: they must co-evolve

A model's ceiling is set by its body. The bandwidth and precision of motion control, the degrees of freedom and sensors of the hardware, and the consistency of data-collection devices all determine what a model can learn and what it can accomplish. We design models with a deep understanding of motion control, hardware, and data collection, and adapt them to these systems; in turn, the robot and its data collection evolve around what the model needs, and the loop is closed in real deployment.

### Lessons from large language models

Large language models show that progress comes not only from scale, but from scaling effectively, running efficiently, and aligning with human values. Physical AGI must carry these lessons into the physical world:

- **Effective scaling** — finding the axes along which physical intelligence scales (data diversity, embodiments, model size, compute) and the laws that make that scaling predictable;
- **Efficiency** — training and inference efficient enough for real-time control on real robots and for fast iteration at scale;
- **Alignment with human values** — behavior that follows human intent and stays safe and reliable in the physical world, where mistakes have real consequences.

We treat these as design principles across models, data, and infrastructure.

## What We Work On

Our work spans the full path from data to deployment: pretraining recipes and action representations for foundation models, embodiment-consistent data systems with rigorous quality control and mixture strategies, and the agent infrastructure that accelerates both, all tested in real-world deployment where models do productive work. It is organized in three directions:

- **Foundation model research** — designing model architectures and training methods for physical intelligence, giving models long-horizon memory, hierarchical planning with high-frequency execution, asynchronous control, and multimodal in-context learning.
- **Data research** — building data pipelines toward general embodied language and action intelligence, covering the full loop from perception, language, and reasoning to execution and feedback.
- **Agent infrastructure research** — using frontier LLMs and agents to build automated pipelines for data synthesis, training, and evaluation, greatly increasing the speed and scale of research iteration.

## Who We Hope to Work With

We hope to collaborate with people who:

- genuinely believe physical AGI will be achieved, are ready to commit to it for the long run, and have their own insight into why models succeed and why they fail;
- rely on frontier LLMs and agents as core tools in their daily research, and know how much these tools can accelerate it;
- see clearly what a model can and cannot do, and can find how it breaks in the real world;
- know that data sets the ceiling of capability, and are willing to invest serious effort in meticulous data work;
- know that infrastructure sets the pace of iteration, and can build systems that are reproducible, automated, and scalable;
- let evidence and experiments guide their research, have a nose for good problems, think clearly, and do not take established conclusions for granted, including ours;
- put the team's success before their own, communicate candidly, take ownership, and keep the whole picture in view;
- have hands-on real-robot experience, a thorough understanding of the whole robot system, and particular curiosity about motion control and hardware;
- have solid mathematics, excellent engineering skills, and genuine depth in a chosen area; experience with large-scale training is a plus.

## Working With Us

We have a large body of data collected in the real physical world, and we support the freedom to explore any approach that improves model capability.

Both internships and full-time roles are possible. If you are interested, or would like to exchange ideas, feel free to reach out at [{{ site.email }}](mailto:{{ site.email | encode_email }}).

<p class="join-actions"><a class="join-button" href="mailto:{{ site.email | encode_email }}?subject=Collaboration">{% include icon.html name="envelope" %} Get in touch</a></p>
