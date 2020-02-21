from pprint import pprint
import requests
import re
import time
from datetime import datetime
import threading
import os
import sys
import tqdm
import csv
import json

# with open('bag.js', 'r') as outfile:
#             json.dump(outList, outfile)

readText = open('./src/bagOfWords.txt', "r").read()
outText = ""
# print((readText))
for line in readText.splitlines():
    outText += '"'+line+'",'
open('./src/bag.js', "w").write(outText)   
# print()