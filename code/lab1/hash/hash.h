#ifndef _HASH_H_
#define _HASH_H_

template<class Key, class T>
class Hash {
public:
  Hash();
  ~Hash();

  void Add(Key key, T value);
  void Print();
  void Find(Key key);
  int Length();
private:
  static const int defaultSize = 2;
  void EnsureSize();

  struct Pair {
    Key key;
    T value;

    Pair(Key key, T value) : key(key), value(value) { }
  };

  Pair *data;
  int count;
  int allocated;
};
#endif
