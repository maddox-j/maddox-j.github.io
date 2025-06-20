---
layout: notes
title: communication-efficient training for foundation models through federated learning.
description: 
---
Very humbled to be have been invited by my good friend [Harsha](https://nelaturuharsha.github.io/){:target="_blank"} as a guest speaker at ML-Efficiency Interest group at the [Cohere Labs Open Science Community](https://cohere.com/research/open-science){:target="_blank"}. I gave a talk covering the historical context of why federated learning methods can be effective in training foundation models. The full abstract can be seen here:

> Training at large scales, as is the case with today’s frontier foundation models, poses a significant engineering challenge. It is no longer sufficient to train on a single node, but instead we require multi-node setups, often across different data centres, to orchestrate training in a “divide and conquer fashion”. Methods such as DDP, TP, PP and variants thereof are frequently employed to manage the computational requirements for training constrained by a given budget. Whilst these solutions solve the memory overhead (to an extent), the amount of communication overhead increases substantially with the number of nodes in the configuration due to both inter-GPU and inter-data centre communication costs.

> However, a new paradigm of training, derived from the federated learning literature, has emerged as a promising, communication-efficient solution whilst not comprising on performance. Essentially, these methods alleviate communication costs by communicating infrequently. In this talk, I hope to introduce you to the promise of federated learning for large scale training, starting from seminal works, to state-of-the-art systems that are competitive with their centralised training counterparts.

🔗: [Link to original post on Cohere Labs](https://cohere.com/events/Cohere-Labs-Andrej-Jovanovic-2025){:target="_blank"} 

<iframe src="https://www.youtube.com/embed/T-HXW6wBQ10" width="910" height="500" allow="autoplay"></iframe>
