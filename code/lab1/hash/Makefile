OBJS = main.o hash.o
PROG = hash
CC = g++
#DEBUG = -g
#GPROF = -pg
CFLAGS = -pedantic -Wall -c -Werror -Wno-sign-conversion -Wno-long-long -lm $(DEBUG) $(GPROF)
LFLAGS = -pedantic -Wall -Werror -Wno-sign-conversion -Wno-long-long -lm $(DEBUG) $(GPROF)

$(PROG) : $(OBJS)
	$(CC) $(LFLAGS) $(OBJS) -o $(PROG)

main.o : main.cpp hash.o
	$(CC) $(CFLAGS) main.cpp

hash.o : hash.h hash.cpp
	$(CC) $(CFLAGS) hash.cpp hash.h
clean :
	rm *.o $(PROG)
