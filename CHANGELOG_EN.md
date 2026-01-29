# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.0] - 2026-01-29

### Changed
- Replace portal-vue with native TeleportToBody component
- Zero runtime dependencies - only requires Vue 2.6+
- Eliminates Vue 2.7 compatibility warnings ($attrs/$listeners readonly)
- Reduced bundle size by removing portal-vue (~20KB)
- Users no longer need to install portal-vue or add portal-target

## [1.0.1] - 2026-01-29

### Fixed
- Fix pathname not updating on SPA route navigation
- Add listeners for pushState/replaceState and popstate events

## [1.0.0] - 2025-01-29

### Added
- Initial release of agentation-vue2
- Visual feedback components for AI coding agents
- Vue 2 compatible port of agentation-vue3
