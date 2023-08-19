# `okta_theme`

Refer to the Terraform Registory for docs: [`okta_theme`](https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/theme).

# `theme` Submodule <a name="`theme` Submodule" id="@cdktf/provider-okta.theme"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Theme <a name="Theme" id="@cdktf/provider-okta.theme.Theme"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/theme okta_theme}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.theme.Theme.Initializer"></a>

```typescript
import { theme } from '@cdktf/provider-okta'

new theme.Theme(scope: Construct, id: string, config: ThemeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.theme.ThemeConfig">ThemeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.theme.ThemeConfig">ThemeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.theme.Theme.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.resetBackgroundImage">resetBackgroundImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.resetEmailTemplateTouchPointVariant">resetEmailTemplateTouchPointVariant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.resetEndUserDashboardTouchPointVariant">resetEndUserDashboardTouchPointVariant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.resetErrorPageTouchPointVariant">resetErrorPageTouchPointVariant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.resetFavicon">resetFavicon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.resetLogo">resetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.resetPrimaryColorContrastHex">resetPrimaryColorContrastHex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.resetPrimaryColorHex">resetPrimaryColorHex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.resetSecondaryColorContrastHex">resetSecondaryColorContrastHex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.resetSecondaryColorHex">resetSecondaryColorHex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.resetSignInPageTouchPointVariant">resetSignInPageTouchPointVariant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.resetThemeId">resetThemeId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.theme.Theme.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.theme.Theme.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.theme.Theme.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.theme.Theme.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.theme.Theme.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.theme.Theme.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.theme.Theme.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.theme.Theme.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.theme.Theme.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.theme.Theme.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.theme.Theme.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.theme.Theme.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.theme.Theme.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.theme.Theme.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.theme.Theme.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.theme.Theme.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.theme.Theme.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.theme.Theme.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.theme.Theme.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.theme.Theme.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.theme.Theme.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.theme.Theme.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.theme.Theme.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.theme.Theme.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.theme.Theme.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.theme.Theme.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.theme.Theme.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.theme.Theme.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.theme.Theme.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetBackgroundImage` <a name="resetBackgroundImage" id="@cdktf/provider-okta.theme.Theme.resetBackgroundImage"></a>

```typescript
public resetBackgroundImage(): void
```

##### `resetEmailTemplateTouchPointVariant` <a name="resetEmailTemplateTouchPointVariant" id="@cdktf/provider-okta.theme.Theme.resetEmailTemplateTouchPointVariant"></a>

```typescript
public resetEmailTemplateTouchPointVariant(): void
```

##### `resetEndUserDashboardTouchPointVariant` <a name="resetEndUserDashboardTouchPointVariant" id="@cdktf/provider-okta.theme.Theme.resetEndUserDashboardTouchPointVariant"></a>

```typescript
public resetEndUserDashboardTouchPointVariant(): void
```

##### `resetErrorPageTouchPointVariant` <a name="resetErrorPageTouchPointVariant" id="@cdktf/provider-okta.theme.Theme.resetErrorPageTouchPointVariant"></a>

```typescript
public resetErrorPageTouchPointVariant(): void
```

##### `resetFavicon` <a name="resetFavicon" id="@cdktf/provider-okta.theme.Theme.resetFavicon"></a>

```typescript
public resetFavicon(): void
```

##### `resetLogo` <a name="resetLogo" id="@cdktf/provider-okta.theme.Theme.resetLogo"></a>

```typescript
public resetLogo(): void
```

##### `resetPrimaryColorContrastHex` <a name="resetPrimaryColorContrastHex" id="@cdktf/provider-okta.theme.Theme.resetPrimaryColorContrastHex"></a>

```typescript
public resetPrimaryColorContrastHex(): void
```

##### `resetPrimaryColorHex` <a name="resetPrimaryColorHex" id="@cdktf/provider-okta.theme.Theme.resetPrimaryColorHex"></a>

```typescript
public resetPrimaryColorHex(): void
```

##### `resetSecondaryColorContrastHex` <a name="resetSecondaryColorContrastHex" id="@cdktf/provider-okta.theme.Theme.resetSecondaryColorContrastHex"></a>

```typescript
public resetSecondaryColorContrastHex(): void
```

##### `resetSecondaryColorHex` <a name="resetSecondaryColorHex" id="@cdktf/provider-okta.theme.Theme.resetSecondaryColorHex"></a>

```typescript
public resetSecondaryColorHex(): void
```

##### `resetSignInPageTouchPointVariant` <a name="resetSignInPageTouchPointVariant" id="@cdktf/provider-okta.theme.Theme.resetSignInPageTouchPointVariant"></a>

```typescript
public resetSignInPageTouchPointVariant(): void
```

##### `resetThemeId` <a name="resetThemeId" id="@cdktf/provider-okta.theme.Theme.resetThemeId"></a>

```typescript
public resetThemeId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.theme.Theme.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.theme.Theme.isConstruct"></a>

```typescript
import { theme } from '@cdktf/provider-okta'

theme.Theme.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.theme.Theme.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.theme.Theme.isTerraformElement"></a>

```typescript
import { theme } from '@cdktf/provider-okta'

theme.Theme.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.theme.Theme.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.theme.Theme.isTerraformResource"></a>

```typescript
import { theme } from '@cdktf/provider-okta'

theme.Theme.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.theme.Theme.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.backgroundImageUrl">backgroundImageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.faviconUrl">faviconUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.links">links</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.logoUrl">logoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.backgroundImageInput">backgroundImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.brandIdInput">brandIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.emailTemplateTouchPointVariantInput">emailTemplateTouchPointVariantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.endUserDashboardTouchPointVariantInput">endUserDashboardTouchPointVariantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.errorPageTouchPointVariantInput">errorPageTouchPointVariantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.faviconInput">faviconInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.logoInput">logoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.primaryColorContrastHexInput">primaryColorContrastHexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.primaryColorHexInput">primaryColorHexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.secondaryColorContrastHexInput">secondaryColorContrastHexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.secondaryColorHexInput">secondaryColorHexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.signInPageTouchPointVariantInput">signInPageTouchPointVariantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.themeIdInput">themeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.backgroundImage">backgroundImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.brandId">brandId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.emailTemplateTouchPointVariant">emailTemplateTouchPointVariant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.endUserDashboardTouchPointVariant">endUserDashboardTouchPointVariant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.errorPageTouchPointVariant">errorPageTouchPointVariant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.favicon">favicon</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.logo">logo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.primaryColorContrastHex">primaryColorContrastHex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.primaryColorHex">primaryColorHex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.secondaryColorContrastHex">secondaryColorContrastHex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.secondaryColorHex">secondaryColorHex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.signInPageTouchPointVariant">signInPageTouchPointVariant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.themeId">themeId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.theme.Theme.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.theme.Theme.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.theme.Theme.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.theme.Theme.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.theme.Theme.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.theme.Theme.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.theme.Theme.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.theme.Theme.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.theme.Theme.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.theme.Theme.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.theme.Theme.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.theme.Theme.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.theme.Theme.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.theme.Theme.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backgroundImageUrl`<sup>Required</sup> <a name="backgroundImageUrl" id="@cdktf/provider-okta.theme.Theme.property.backgroundImageUrl"></a>

```typescript
public readonly backgroundImageUrl: string;
```

- *Type:* string

---

##### `faviconUrl`<sup>Required</sup> <a name="faviconUrl" id="@cdktf/provider-okta.theme.Theme.property.faviconUrl"></a>

```typescript
public readonly faviconUrl: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.theme.Theme.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-okta.theme.Theme.property.links"></a>

```typescript
public readonly links: string;
```

- *Type:* string

---

##### `logoUrl`<sup>Required</sup> <a name="logoUrl" id="@cdktf/provider-okta.theme.Theme.property.logoUrl"></a>

```typescript
public readonly logoUrl: string;
```

- *Type:* string

---

##### `backgroundImageInput`<sup>Optional</sup> <a name="backgroundImageInput" id="@cdktf/provider-okta.theme.Theme.property.backgroundImageInput"></a>

```typescript
public readonly backgroundImageInput: string;
```

- *Type:* string

---

##### `brandIdInput`<sup>Optional</sup> <a name="brandIdInput" id="@cdktf/provider-okta.theme.Theme.property.brandIdInput"></a>

```typescript
public readonly brandIdInput: string;
```

- *Type:* string

---

##### `emailTemplateTouchPointVariantInput`<sup>Optional</sup> <a name="emailTemplateTouchPointVariantInput" id="@cdktf/provider-okta.theme.Theme.property.emailTemplateTouchPointVariantInput"></a>

```typescript
public readonly emailTemplateTouchPointVariantInput: string;
```

- *Type:* string

---

##### `endUserDashboardTouchPointVariantInput`<sup>Optional</sup> <a name="endUserDashboardTouchPointVariantInput" id="@cdktf/provider-okta.theme.Theme.property.endUserDashboardTouchPointVariantInput"></a>

```typescript
public readonly endUserDashboardTouchPointVariantInput: string;
```

- *Type:* string

---

##### `errorPageTouchPointVariantInput`<sup>Optional</sup> <a name="errorPageTouchPointVariantInput" id="@cdktf/provider-okta.theme.Theme.property.errorPageTouchPointVariantInput"></a>

```typescript
public readonly errorPageTouchPointVariantInput: string;
```

- *Type:* string

---

##### `faviconInput`<sup>Optional</sup> <a name="faviconInput" id="@cdktf/provider-okta.theme.Theme.property.faviconInput"></a>

```typescript
public readonly faviconInput: string;
```

- *Type:* string

---

##### `logoInput`<sup>Optional</sup> <a name="logoInput" id="@cdktf/provider-okta.theme.Theme.property.logoInput"></a>

```typescript
public readonly logoInput: string;
```

- *Type:* string

---

##### `primaryColorContrastHexInput`<sup>Optional</sup> <a name="primaryColorContrastHexInput" id="@cdktf/provider-okta.theme.Theme.property.primaryColorContrastHexInput"></a>

```typescript
public readonly primaryColorContrastHexInput: string;
```

- *Type:* string

---

##### `primaryColorHexInput`<sup>Optional</sup> <a name="primaryColorHexInput" id="@cdktf/provider-okta.theme.Theme.property.primaryColorHexInput"></a>

```typescript
public readonly primaryColorHexInput: string;
```

- *Type:* string

---

##### `secondaryColorContrastHexInput`<sup>Optional</sup> <a name="secondaryColorContrastHexInput" id="@cdktf/provider-okta.theme.Theme.property.secondaryColorContrastHexInput"></a>

```typescript
public readonly secondaryColorContrastHexInput: string;
```

- *Type:* string

---

##### `secondaryColorHexInput`<sup>Optional</sup> <a name="secondaryColorHexInput" id="@cdktf/provider-okta.theme.Theme.property.secondaryColorHexInput"></a>

```typescript
public readonly secondaryColorHexInput: string;
```

- *Type:* string

---

##### `signInPageTouchPointVariantInput`<sup>Optional</sup> <a name="signInPageTouchPointVariantInput" id="@cdktf/provider-okta.theme.Theme.property.signInPageTouchPointVariantInput"></a>

```typescript
public readonly signInPageTouchPointVariantInput: string;
```

- *Type:* string

---

##### `themeIdInput`<sup>Optional</sup> <a name="themeIdInput" id="@cdktf/provider-okta.theme.Theme.property.themeIdInput"></a>

```typescript
public readonly themeIdInput: string;
```

- *Type:* string

---

##### `backgroundImage`<sup>Required</sup> <a name="backgroundImage" id="@cdktf/provider-okta.theme.Theme.property.backgroundImage"></a>

```typescript
public readonly backgroundImage: string;
```

- *Type:* string

---

##### `brandId`<sup>Required</sup> <a name="brandId" id="@cdktf/provider-okta.theme.Theme.property.brandId"></a>

```typescript
public readonly brandId: string;
```

- *Type:* string

---

##### `emailTemplateTouchPointVariant`<sup>Required</sup> <a name="emailTemplateTouchPointVariant" id="@cdktf/provider-okta.theme.Theme.property.emailTemplateTouchPointVariant"></a>

```typescript
public readonly emailTemplateTouchPointVariant: string;
```

- *Type:* string

---

##### `endUserDashboardTouchPointVariant`<sup>Required</sup> <a name="endUserDashboardTouchPointVariant" id="@cdktf/provider-okta.theme.Theme.property.endUserDashboardTouchPointVariant"></a>

```typescript
public readonly endUserDashboardTouchPointVariant: string;
```

- *Type:* string

---

##### `errorPageTouchPointVariant`<sup>Required</sup> <a name="errorPageTouchPointVariant" id="@cdktf/provider-okta.theme.Theme.property.errorPageTouchPointVariant"></a>

```typescript
public readonly errorPageTouchPointVariant: string;
```

- *Type:* string

---

##### `favicon`<sup>Required</sup> <a name="favicon" id="@cdktf/provider-okta.theme.Theme.property.favicon"></a>

```typescript
public readonly favicon: string;
```

- *Type:* string

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktf/provider-okta.theme.Theme.property.logo"></a>

```typescript
public readonly logo: string;
```

- *Type:* string

---

##### `primaryColorContrastHex`<sup>Required</sup> <a name="primaryColorContrastHex" id="@cdktf/provider-okta.theme.Theme.property.primaryColorContrastHex"></a>

```typescript
public readonly primaryColorContrastHex: string;
```

- *Type:* string

---

##### `primaryColorHex`<sup>Required</sup> <a name="primaryColorHex" id="@cdktf/provider-okta.theme.Theme.property.primaryColorHex"></a>

```typescript
public readonly primaryColorHex: string;
```

- *Type:* string

---

##### `secondaryColorContrastHex`<sup>Required</sup> <a name="secondaryColorContrastHex" id="@cdktf/provider-okta.theme.Theme.property.secondaryColorContrastHex"></a>

```typescript
public readonly secondaryColorContrastHex: string;
```

- *Type:* string

---

##### `secondaryColorHex`<sup>Required</sup> <a name="secondaryColorHex" id="@cdktf/provider-okta.theme.Theme.property.secondaryColorHex"></a>

```typescript
public readonly secondaryColorHex: string;
```

- *Type:* string

---

##### `signInPageTouchPointVariant`<sup>Required</sup> <a name="signInPageTouchPointVariant" id="@cdktf/provider-okta.theme.Theme.property.signInPageTouchPointVariant"></a>

```typescript
public readonly signInPageTouchPointVariant: string;
```

- *Type:* string

---

##### `themeId`<sup>Required</sup> <a name="themeId" id="@cdktf/provider-okta.theme.Theme.property.themeId"></a>

```typescript
public readonly themeId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.theme.Theme.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ThemeConfig <a name="ThemeConfig" id="@cdktf/provider-okta.theme.ThemeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.theme.ThemeConfig.Initializer"></a>

```typescript
import { theme } from '@cdktf/provider-okta'

const themeConfig: theme.ThemeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.brandId">brandId</a></code> | <code>string</code> | Brand ID. |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.backgroundImage">backgroundImage</a></code> | <code>string</code> | Path to local file. |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.emailTemplateTouchPointVariant">emailTemplateTouchPointVariant</a></code> | <code>string</code> | Variant for email templates (`OKTA_DEFAULT`, `FULL_THEME`). |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.endUserDashboardTouchPointVariant">endUserDashboardTouchPointVariant</a></code> | <code>string</code> | Variant for the Okta End-User Dashboard (`OKTA_DEFAULT`, `WHITE_LOGO_BACKGROUND`, `FULL_THEME`, `LOGO_ON_FULL_WHITE_BACKGROUND`). |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.errorPageTouchPointVariant">errorPageTouchPointVariant</a></code> | <code>string</code> | Variant for the error page (`OKTA_DEFAULT`, `BACKGROUND_SECONDARY_COLOR`, `BACKGROUND_IMAGE`). |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.favicon">favicon</a></code> | <code>string</code> | Path to local file. |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.logo">logo</a></code> | <code>string</code> | Path to local file. |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.primaryColorContrastHex">primaryColorContrastHex</a></code> | <code>string</code> | Primary color contrast hex code. |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.primaryColorHex">primaryColorHex</a></code> | <code>string</code> | Primary color hex code. |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.secondaryColorContrastHex">secondaryColorContrastHex</a></code> | <code>string</code> | Secondary color contrast hex code. |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.secondaryColorHex">secondaryColorHex</a></code> | <code>string</code> | Secondary color hex code. |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.signInPageTouchPointVariant">signInPageTouchPointVariant</a></code> | <code>string</code> | Variant for the Okta Sign-In Page (`OKTA_DEFAULT`, `BACKGROUND_SECONDARY_COLOR`, `BACKGROUND_IMAGE`). |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.themeId">themeId</a></code> | <code>string</code> | Theme ID - Note: Okta API for theme only reads and updates therefore the okta_theme resource needs to act as a quasi data source. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.theme.ThemeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.theme.ThemeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.theme.ThemeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.theme.ThemeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.theme.ThemeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.theme.ThemeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.theme.ThemeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `brandId`<sup>Required</sup> <a name="brandId" id="@cdktf/provider-okta.theme.ThemeConfig.property.brandId"></a>

```typescript
public readonly brandId: string;
```

- *Type:* string

Brand ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/theme#brand_id Theme#brand_id}

---

##### `backgroundImage`<sup>Optional</sup> <a name="backgroundImage" id="@cdktf/provider-okta.theme.ThemeConfig.property.backgroundImage"></a>

```typescript
public readonly backgroundImage: string;
```

- *Type:* string

Path to local file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/theme#background_image Theme#background_image}

---

##### `emailTemplateTouchPointVariant`<sup>Optional</sup> <a name="emailTemplateTouchPointVariant" id="@cdktf/provider-okta.theme.ThemeConfig.property.emailTemplateTouchPointVariant"></a>

```typescript
public readonly emailTemplateTouchPointVariant: string;
```

- *Type:* string

Variant for email templates (`OKTA_DEFAULT`, `FULL_THEME`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/theme#email_template_touch_point_variant Theme#email_template_touch_point_variant}

---

##### `endUserDashboardTouchPointVariant`<sup>Optional</sup> <a name="endUserDashboardTouchPointVariant" id="@cdktf/provider-okta.theme.ThemeConfig.property.endUserDashboardTouchPointVariant"></a>

```typescript
public readonly endUserDashboardTouchPointVariant: string;
```

- *Type:* string

Variant for the Okta End-User Dashboard (`OKTA_DEFAULT`, `WHITE_LOGO_BACKGROUND`, `FULL_THEME`, `LOGO_ON_FULL_WHITE_BACKGROUND`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/theme#end_user_dashboard_touch_point_variant Theme#end_user_dashboard_touch_point_variant}

---

##### `errorPageTouchPointVariant`<sup>Optional</sup> <a name="errorPageTouchPointVariant" id="@cdktf/provider-okta.theme.ThemeConfig.property.errorPageTouchPointVariant"></a>

```typescript
public readonly errorPageTouchPointVariant: string;
```

- *Type:* string

Variant for the error page (`OKTA_DEFAULT`, `BACKGROUND_SECONDARY_COLOR`, `BACKGROUND_IMAGE`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/theme#error_page_touch_point_variant Theme#error_page_touch_point_variant}

---

##### `favicon`<sup>Optional</sup> <a name="favicon" id="@cdktf/provider-okta.theme.ThemeConfig.property.favicon"></a>

```typescript
public readonly favicon: string;
```

- *Type:* string

Path to local file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/theme#favicon Theme#favicon}

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.theme.ThemeConfig.property.logo"></a>

```typescript
public readonly logo: string;
```

- *Type:* string

Path to local file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/theme#logo Theme#logo}

---

##### `primaryColorContrastHex`<sup>Optional</sup> <a name="primaryColorContrastHex" id="@cdktf/provider-okta.theme.ThemeConfig.property.primaryColorContrastHex"></a>

```typescript
public readonly primaryColorContrastHex: string;
```

- *Type:* string

Primary color contrast hex code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/theme#primary_color_contrast_hex Theme#primary_color_contrast_hex}

---

##### `primaryColorHex`<sup>Optional</sup> <a name="primaryColorHex" id="@cdktf/provider-okta.theme.ThemeConfig.property.primaryColorHex"></a>

```typescript
public readonly primaryColorHex: string;
```

- *Type:* string

Primary color hex code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/theme#primary_color_hex Theme#primary_color_hex}

---

##### `secondaryColorContrastHex`<sup>Optional</sup> <a name="secondaryColorContrastHex" id="@cdktf/provider-okta.theme.ThemeConfig.property.secondaryColorContrastHex"></a>

```typescript
public readonly secondaryColorContrastHex: string;
```

- *Type:* string

Secondary color contrast hex code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/theme#secondary_color_contrast_hex Theme#secondary_color_contrast_hex}

---

##### `secondaryColorHex`<sup>Optional</sup> <a name="secondaryColorHex" id="@cdktf/provider-okta.theme.ThemeConfig.property.secondaryColorHex"></a>

```typescript
public readonly secondaryColorHex: string;
```

- *Type:* string

Secondary color hex code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/theme#secondary_color_hex Theme#secondary_color_hex}

---

##### `signInPageTouchPointVariant`<sup>Optional</sup> <a name="signInPageTouchPointVariant" id="@cdktf/provider-okta.theme.ThemeConfig.property.signInPageTouchPointVariant"></a>

```typescript
public readonly signInPageTouchPointVariant: string;
```

- *Type:* string

Variant for the Okta Sign-In Page (`OKTA_DEFAULT`, `BACKGROUND_SECONDARY_COLOR`, `BACKGROUND_IMAGE`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/theme#sign_in_page_touch_point_variant Theme#sign_in_page_touch_point_variant}

---

##### `themeId`<sup>Optional</sup> <a name="themeId" id="@cdktf/provider-okta.theme.ThemeConfig.property.themeId"></a>

```typescript
public readonly themeId: string;
```

- *Type:* string

Theme ID - Note: Okta API for theme only reads and updates therefore the okta_theme resource needs to act as a quasi data source.

Do this by setting theme_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/theme#theme_id Theme#theme_id}

---



