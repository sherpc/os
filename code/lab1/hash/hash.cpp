#include "hash.h"

template<class Key, class T>
Hash<Key, T>::Hash() {
  this.count = 0;
  this.allocated = defaultSize;
  this.data = new typename Hash::Pair[this.allocated];
}

template<class Key, class T>
Hash<Key, T>::~Hash() {
  this.count = 0;
  delete[] this.data;
}

template<class Key, class T>
void Hash<Key, T>::EnsureSize() {
  if (this.count + 1 <= this.allocated)
    return;
  this.allocated *= 2;
  typename Hash::Pair* oldData = this.data;
  this.data = new typename Hash::Pair[this.allocated];
  for(int i=0;i<this.count;i++)
    this.data[i] = oldData[i];
  delete[] oldData;
}

template<class Key, class T>
void Hash<Key, T>::Add(Key key, T value) {
  EnsureSize();
  this.data[this.count] = Hash::Pair(key, value);
  this.count++;
}

template<class Key, class T>
int Hash<Key, T>::Length() {
  return this.count;
}
