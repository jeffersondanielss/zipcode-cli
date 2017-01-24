# Zipcode CLI


## Instalação

Abra seu terminal e execute:

```bash
$ npm install -g zipcode-cli

// ou

$ yarn global add zipcode-cli --prefix /usr/local
```

## Como usar

```bash
$ zipcode <cep>
```

### Opções

Mostrar apenas a logradouro, `-l, --logradouro`.

```bash
$ zipcode <cep> -a
```

Mostrar apenas a cidade, `-c, --cidade`.

```bash
$ zipcode <cep> -c
```
  
Mostrar apenas o estado, `-e, --estado`.

```bash
$ zipcode <cep> -s
```

Mostrar apenas o bairro, `-b, --bairro`.

```bash
$ zipcode <cep> -d
```

Combinação de parametros, `-lbce`.

```bash
$ zipcode <cep> -lbce
```

### lisence
MIT