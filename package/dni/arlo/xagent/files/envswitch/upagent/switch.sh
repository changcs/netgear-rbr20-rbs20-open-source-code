#!/bin/sh

source ./upagent.$1.env || exit 1

d2 -c UpCfg[0].UpBaseURL ${UP_BACKEND_BASE}
