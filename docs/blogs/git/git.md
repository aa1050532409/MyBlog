---
title: git的使用
description: "好像没啥用的description"
categories:
    - git
tags:
    - git's use
publish: true
date: 2021-5-15 23:30:00
---

# 总结一下git的基本使用

**从创建github仓库后，将项目复制到本地**
:::tip
在本地目录下 鼠标右键 git bash here  
git clone 项目仓库地址
:::

如果没生成过本地的git管理库，需要先生成
:::tip
在本地项目根目录 git init
:::  
</br>

**每次修改了项目后上传，都可进行以下操作**

将项目中中的文件（所有/单个）添加到仓库，写上注释并提交到github
:::tip
git add .  &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;   git add 文件名  
git commit -m"本次提交注释"  
git push
:::

如果 git push 不成功，可换种方法，**master是分支名**
:::tip
git pull origin master  
git push -u origin master
:::
