---
layout: notes
title: RecyclEd
description: The development of a reverse recycling machine
---
## Premise: Why did I even make a reverse recycling machine?

The tl;dr of it that it was part of my university's coursework. This is quite underwhelming, yes. However, the project turned out to be a lot more fun than I had imagined. So much so that I though it deserved it's own blog post. Without further ado, let's get stuck in.

## What is RecyclEd?

RecyclEd is a reverse recycling machine that takes recyclable items from users and classifies them according to their object category (plastic bottle, glass bottle, metal can, or rubbish). Object classification is performed using a residual neural network. If the object is classified as recycling, the system will move the object into the appropriate bin. Based on the items accepted, the user will be entitled to monetary compensation, given through a coupon to the user.

### How does it work: Step-by-step

![](/assets/img/detailed_front.jpeg){: height="400" width="300px" style="float:left; padding-right:20px"}

1) A user will come to the machine with their recyclable items and press a start on Recycled's touch screen.

2) The user will place their items, one by one, into the viewing chamber of the machine, and press the 'take a photo' button on the touch screen.

3) RecyclEd will the *classify* the image. If the item is recyclable, the item will be dropped into a landing tray below the viewing deck and transported into its relevant bin. If the item is not recyclable,the user will have to remove it.

4) The user will repeat this process until all their recycling has been processed. Once they are finished, they may redeem their coupon in the form of a QR code, which they can scan from the machine's touch screen display.

That are basically the nuts and bolts of the operation. However what made this project interesting was actually how this machine went about *classifying* the images.

## Image Classification

Our approach to this task was to use State of the Art (SotA) techniques in computer vision that have made ground breaking performance is computer vision. This was none other than with the use of a ResNet. 
> *Here is a link to the [paper](https://arxiv.org/abs/1512.03385). Below we see an image of the ResNet architecture. The image source can be found [here](https://www.kaggle.com/datasets/pytorch/resnet152).*

![](/assets/img/resnet.png){: height="600px" width="350px" style="float:right; padding-left:20px"}

### What is so special about ResNet?

ResNet made waves in the deep learning community when it took home first prize in the ILSVRC 2015 competition.The reason for this its major success is that the ResNet architecture was able to solve the problem of vanishing gradients (*See more information* [*here*](https://towardsdatascience.com/understanding-and-visualizing-resnets-442284831be8)) by utilisng skip connections/layers to the architecture as visualised in the photograph. This allowed it set new standards when it came to image detection on [ImageNet](https://www.image-net.org/).

In order to incorporate this SotA architecture into our model, we decided to leverage the use of a ResNet-152 that was pre-trained on the ImageNet dataset. Following this, we fine-tuned our model  on our own trash data so that we could achieve better performance. This led us to achieve a 86.2% real world accuracy when evaluating our project.

### MLOps

What made this project particularly interesting is that we needed the RecyclEd machine to be powered by a single RasberryPi. Now, given the size of our model, doing local inference would not be feasible. Nor was this ideal from a scalability perspective. To solve the issue, we went to the *cloud*.

### Google Cloud Platform (GCP)

Using our student GCP accounts, we were able to setup a bucket in which we were able to store our model. We also created a server with an API that the RasberryPi could interface with when it came to classifying the images. Not only did this solve our issue, it also made it possible to scale for many more RecyclEd devices, if the need ever came for it (obviously, it did not...). As an aside, we were also able to add a database for our coupons, allowing us to validate them.

## Concluding Remarks

This project was very informative for two main reasons. The first was that this was the first time that I have tackled a project of this scale, seeing it out from an idea to a final product. The journey was not easy, with many revisions, but it was worth it. The second reason is related to the use of the ResNet. Reading about the architectures in a paper is one thing; having the engineering know-how to deploy the model into production is a completely different. This was definitely a big, yet welcomed, learning curve for me.

*For the sake of brevity, I have omitted many of the details of the project. If you are interested in finding out more, please feel to email me on the address below.*
