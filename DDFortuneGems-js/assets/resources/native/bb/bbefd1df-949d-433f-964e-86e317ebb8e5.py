#!/usr/bin/python
# -*- coding: UTF-8 -*-

import json
import os
import shutil
 

# file = open("filename.txt", "w")
# for c in content:
#     file.write(c)
#     file.write("\n")
# file.close()



# 打开json文件
# with open('ttt.json', 'r') as f:
#     # 加载json文件内容
#     data = json.load(f)
#     if len(data) > 0 :
#         for a in data[-1]:
#             b = a[0][0]
#             # and b[4].get("skeleton"))
#             if len(b) == 6 :
#                 print(b[1])
fruit = 'fruit' 

def extension(filename):
    return filename[filename.rfind('.')+1:]


files2 = []
js = []
    
def walk(path):
    for root, dirs, files in os.walk(path, topdown=False):
        for name in files:
            ext = extension(name)
            if ext  == "js" or ext  == "ts":
                js.append(name)
        for name in dirs:
            files2.append(name)
            pass
            # print(os.path.join(root, name))
   

walk(".")


for root, dirs, files in os.walk('.', topdown=False):
    for name in files:
        ext = extension(name)
        if ext  == "js" or ext  == "ts":
            os.remove(os.path.join(root, name))
        if ext  == "meta":
            n = name[:-5]
            if n in js :
                print(n)
                os.remove(os.path.join(root, name))
        # print(os.path.join(root, name))
        
    for name in dirs:
        pass

import os, stat

def is_empty_folder(path):
    return len(os.listdir(path)) == 0


def remove_readonly(func, path, _):  # 错误回调函数，改变只读属性位，重新删除
    "Clear the readonly bit and reattempt the removal"
    os.chmod(path, stat.S_IWRITE)
    func(path)



# def walk(path):
#     for root, dirs, files in os.walk(path, topdown=False):
#         all = True
#         for name in files:
#             if extension(name) != 'meta':
#                 print(name)
#                 all = False
#         print(all)
#         if all:
#             for name in files:
#                 print(name)
#                 if name != 'main.py':
#                     os.remove(os.path.join(root, name))

#         for name in dirs:
#             print(name)
#             if(is_empty_folder(os.path.join(root, name))):
#                 print(name)
#                 # os.remove(os.path.join(root, name))
#                 shutil.rmtree(os.path.join(root, name), onerror=remove_readonly)  


# walk('.')

walk('.')

print("done")
os.system("pause")