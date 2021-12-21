import sys

def getPrice(a, b, c):
    return a+b+c

if __name__== "__main__":
    print(getPrice(int(sys.argv[1]), int(sys.argv[2]), int(sys.argv[3])))