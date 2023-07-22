---
layout: notes
title: Rumour Detection in the Wild - A Browser Extension for Twitter
description: Creating a browser extenstion that is able to perform rumour detection on Twitter in real time.
---

# Abstract 
Rumour detection, particularly on social media, has gained significant popularity in recent years. This is due to the disastrous effects rumours have had on society when allowed to propagate virally. As such, the machine learning community has made significant contributions in investigating automatic methods to detect rumours on such platforms. However, these state-of-the-art models are often deployed by social media companies; ordinary end-users cannot leverage the solutions in the literature for their own rumour detection.

To address this issue, this dissertation puts forward a novel browser extension that is capable of performing rumour detection on Twitter. In addition to classifying the rumour status of every tweet, we enhance the user's experience through providing news articles that are semantically related to the tweet. Initial results from a user study confirm that this browser extension provides benefit to users in identifying rumours on Twitter. Additionally, we examine the performance of our browser extension, and the associated rumour detection model, on out-of-distribution (OOD) and imperfect data. Our experiments show that the rumour detection model's state-of-the-art performance decays dramatically if it is evaluated on OOD, or if it is unable to represent the textual content of the tweets in a tweet cascade sufficiently. To this end, additional infrastructure for the browser extension is required to ensure its usability when deployed as a live service for Twitter users at large.

# Materials
The materials for this browser extension have been made freely available on my GitHub profile [here](https://github.com/maddox-j/rumour_detection_in_the_wild).