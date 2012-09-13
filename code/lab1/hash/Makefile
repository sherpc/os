OBJS = main.o hash.o
PROG = hash
CC = g++
#DEBUG = -g
#GPROF = -pg
CFLAGS = -pedantic -Wall -c -Werror -Wno-sign-conversion -Wno-long-long -nostdinc++ -lm $(DEBUG) $(GPROF)
LFLAGS = -pedantic -Wall -Werror -Wno-sign-conversion -Wno-long-long -nostdinc++ -lm $(DEBUG) $(GPROF)

$(PROG) : $(OBJS)
	$(CC) $(LFLAGS) $(OBJS) -o $(PROG)

main.o : main.cpp hash.o
	$(CC) $(CFLAGS) main.cpp

hash.o : hash.h hash.cpp
	$(CC) $(CFLAGS) hash.cpp
clean :
	rm *.o *.d $(PROG)
