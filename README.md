# bitcedi-Blockchain-Explorer
Block explorer for bitcedi CryptoNote based cryptocurrency.

#### Installation

1) It takes data from daemon bitcedid. It should be accessible from the Internet. Run bitcedid with open port as follows:
```bash
./bitcedid --restricted-rpc --enable-cors=* --enable-blockchain-indexes --rpc-bind-ip=0.0.0.0 --rpc-bind-port=32348
```
2) Just upload to your website and change 'api' variable in config.js to point to your daemon.
# bitcediexplorer
