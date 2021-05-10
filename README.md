# 👷 Shrtnr

An incredibly simple URL shortening service using Cloudflare workers 

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/BrockReece/shrtnr)

## Usage
Simply visit the following URL (replacing `${account-name}` for your CF account name) and it will redirect you to another site.

`https://shrtnr.${account-name}.workers.dev/some-key`

You can also specify [Routes](https://developers.cloudflare.com/workers/platform/routes) to use a custom (preferably short) domain name.

## Mapping
Shrtnr uses Cloudflare's [KV](https://developers.cloudflare.com/workers/learning/how-kv-works) store to map urls and thier short reference as key-value pairs

### Add new mapping
To add additional mappings `POST` the following payload to the worker, where `key` is the short reference and `value` is the URL to redirect to.

```JSON
// POST https://shrtnr.${account-name}.workers.dev
{
    "key": "some-other-key",
    "value": "https://example.com"
}
```
