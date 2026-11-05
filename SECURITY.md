# Security policy

## Supported versions

Only the latest release gets security fixes. If you are on an older version, update first and check whether the problem is still there.

## Reporting a vulnerability

Please don't open a public issue or discussion for a security problem. Use GitHub's private report instead: open the repository's **Security** tab, choose **Report a vulnerability**, and describe what you found. Only the maintainer sees it.

A report is easiest to act on when it has:

- which card it affects (Pulse Card, Pulse Climate Card or Pulse Weather Card) and the version
- your Home Assistant version and browser
- the smallest card config that shows the problem (remove tokens, URLs and anything personal)
- what you expected to happen and what happened instead

## What counts

The cards run inside your browser, in the Home Assistant frontend, so the realistic problems are about content getting somewhere it shouldn't:

- a value from a card config, an entity name or an entity attribute that breaks out of the HTML or CSS it is written into
- an action or link that opens or runs something other than what the config says
- a dependency in the shipped bundle with a known high or critical vulnerability

These are usually not vulnerabilities in this project: a bug in Home Assistant itself, in an integration such as Tado CE or Atmos CE, or a setup where someone who can already edit your dashboards chooses a value for their own config and it does what they asked.

## What the project does about it

- Values taken from card configs and entities are escaped or cleaned before they go into the card's markup. Version 1.10.0 closed a gap where a colour or size value containing a quote, or an HTML character reference, could escape its field.
- Every push and pull request runs lint, type checking, a production build and `npm audit` for high and critical advisories, plus CodeQL and secret scanning. Dependabot proposes dependency updates every week, and GitHub Actions are pinned to commit hashes.

## After a fix

Once a fix is released, the release notes say what changed. If you reported it, you are credited in [CREDITS.md](CREDITS.md) unless you would rather stay anonymous.
