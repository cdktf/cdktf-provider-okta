# `okta_theme`

Refer to the Terraform Registory for docs: [`okta_theme`](https://www.terraform.io/docs/providers/okta/r/theme).

# `theme` Submodule <a name="`theme` Submodule" id="@cdktf/provider-okta.theme"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Theme <a name="Theme" id="@cdktf/provider-okta.theme.Theme"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/theme okta_theme}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.theme.Theme.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new Theme(Construct Scope, string Id, ThemeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.theme.ThemeConfig">ThemeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.theme.ThemeConfig">ThemeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.theme.Theme.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.resetBackgroundImage">ResetBackgroundImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.resetEmailTemplateTouchPointVariant">ResetEmailTemplateTouchPointVariant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.resetEndUserDashboardTouchPointVariant">ResetEndUserDashboardTouchPointVariant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.resetErrorPageTouchPointVariant">ResetErrorPageTouchPointVariant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.resetFavicon">ResetFavicon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.resetLogo">ResetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.resetPrimaryColorContrastHex">ResetPrimaryColorContrastHex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.resetPrimaryColorHex">ResetPrimaryColorHex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.resetSecondaryColorContrastHex">ResetSecondaryColorContrastHex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.resetSecondaryColorHex">ResetSecondaryColorHex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.resetSignInPageTouchPointVariant">ResetSignInPageTouchPointVariant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.resetThemeId">ResetThemeId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.theme.Theme.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.theme.Theme.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.theme.Theme.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.theme.Theme.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.theme.Theme.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.theme.Theme.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.theme.Theme.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.theme.Theme.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.theme.Theme.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.theme.Theme.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.theme.Theme.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.theme.Theme.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.theme.Theme.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.theme.Theme.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.theme.Theme.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.theme.Theme.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.theme.Theme.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.theme.Theme.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.theme.Theme.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.theme.Theme.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.theme.Theme.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.theme.Theme.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.theme.Theme.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.theme.Theme.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.theme.Theme.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.theme.Theme.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.theme.Theme.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.theme.Theme.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.theme.Theme.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetBackgroundImage` <a name="ResetBackgroundImage" id="@cdktf/provider-okta.theme.Theme.resetBackgroundImage"></a>

```csharp
private void ResetBackgroundImage()
```

##### `ResetEmailTemplateTouchPointVariant` <a name="ResetEmailTemplateTouchPointVariant" id="@cdktf/provider-okta.theme.Theme.resetEmailTemplateTouchPointVariant"></a>

```csharp
private void ResetEmailTemplateTouchPointVariant()
```

##### `ResetEndUserDashboardTouchPointVariant` <a name="ResetEndUserDashboardTouchPointVariant" id="@cdktf/provider-okta.theme.Theme.resetEndUserDashboardTouchPointVariant"></a>

```csharp
private void ResetEndUserDashboardTouchPointVariant()
```

##### `ResetErrorPageTouchPointVariant` <a name="ResetErrorPageTouchPointVariant" id="@cdktf/provider-okta.theme.Theme.resetErrorPageTouchPointVariant"></a>

```csharp
private void ResetErrorPageTouchPointVariant()
```

##### `ResetFavicon` <a name="ResetFavicon" id="@cdktf/provider-okta.theme.Theme.resetFavicon"></a>

```csharp
private void ResetFavicon()
```

##### `ResetLogo` <a name="ResetLogo" id="@cdktf/provider-okta.theme.Theme.resetLogo"></a>

```csharp
private void ResetLogo()
```

##### `ResetPrimaryColorContrastHex` <a name="ResetPrimaryColorContrastHex" id="@cdktf/provider-okta.theme.Theme.resetPrimaryColorContrastHex"></a>

```csharp
private void ResetPrimaryColorContrastHex()
```

##### `ResetPrimaryColorHex` <a name="ResetPrimaryColorHex" id="@cdktf/provider-okta.theme.Theme.resetPrimaryColorHex"></a>

```csharp
private void ResetPrimaryColorHex()
```

##### `ResetSecondaryColorContrastHex` <a name="ResetSecondaryColorContrastHex" id="@cdktf/provider-okta.theme.Theme.resetSecondaryColorContrastHex"></a>

```csharp
private void ResetSecondaryColorContrastHex()
```

##### `ResetSecondaryColorHex` <a name="ResetSecondaryColorHex" id="@cdktf/provider-okta.theme.Theme.resetSecondaryColorHex"></a>

```csharp
private void ResetSecondaryColorHex()
```

##### `ResetSignInPageTouchPointVariant` <a name="ResetSignInPageTouchPointVariant" id="@cdktf/provider-okta.theme.Theme.resetSignInPageTouchPointVariant"></a>

```csharp
private void ResetSignInPageTouchPointVariant()
```

##### `ResetThemeId` <a name="ResetThemeId" id="@cdktf/provider-okta.theme.Theme.resetThemeId"></a>

```csharp
private void ResetThemeId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.theme.Theme.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.theme.Theme.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

Theme.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.theme.Theme.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.theme.Theme.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

Theme.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.theme.Theme.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.theme.Theme.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

Theme.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.theme.Theme.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.backgroundImageUrl">BackgroundImageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.faviconUrl">FaviconUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.links">Links</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.logoUrl">LogoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.backgroundImageInput">BackgroundImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.brandIdInput">BrandIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.emailTemplateTouchPointVariantInput">EmailTemplateTouchPointVariantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.endUserDashboardTouchPointVariantInput">EndUserDashboardTouchPointVariantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.errorPageTouchPointVariantInput">ErrorPageTouchPointVariantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.faviconInput">FaviconInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.logoInput">LogoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.primaryColorContrastHexInput">PrimaryColorContrastHexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.primaryColorHexInput">PrimaryColorHexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.secondaryColorContrastHexInput">SecondaryColorContrastHexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.secondaryColorHexInput">SecondaryColorHexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.signInPageTouchPointVariantInput">SignInPageTouchPointVariantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.themeIdInput">ThemeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.backgroundImage">BackgroundImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.brandId">BrandId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.emailTemplateTouchPointVariant">EmailTemplateTouchPointVariant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.endUserDashboardTouchPointVariant">EndUserDashboardTouchPointVariant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.errorPageTouchPointVariant">ErrorPageTouchPointVariant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.favicon">Favicon</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.logo">Logo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.primaryColorContrastHex">PrimaryColorContrastHex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.primaryColorHex">PrimaryColorHex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.secondaryColorContrastHex">SecondaryColorContrastHex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.secondaryColorHex">SecondaryColorHex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.signInPageTouchPointVariant">SignInPageTouchPointVariant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.themeId">ThemeId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.theme.Theme.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.theme.Theme.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.theme.Theme.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.theme.Theme.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.theme.Theme.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.theme.Theme.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.theme.Theme.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.theme.Theme.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.theme.Theme.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.theme.Theme.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.theme.Theme.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.theme.Theme.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.theme.Theme.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.theme.Theme.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BackgroundImageUrl`<sup>Required</sup> <a name="BackgroundImageUrl" id="@cdktf/provider-okta.theme.Theme.property.backgroundImageUrl"></a>

```csharp
public string BackgroundImageUrl { get; }
```

- *Type:* string

---

##### `FaviconUrl`<sup>Required</sup> <a name="FaviconUrl" id="@cdktf/provider-okta.theme.Theme.property.faviconUrl"></a>

```csharp
public string FaviconUrl { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.theme.Theme.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Links`<sup>Required</sup> <a name="Links" id="@cdktf/provider-okta.theme.Theme.property.links"></a>

```csharp
public string Links { get; }
```

- *Type:* string

---

##### `LogoUrl`<sup>Required</sup> <a name="LogoUrl" id="@cdktf/provider-okta.theme.Theme.property.logoUrl"></a>

```csharp
public string LogoUrl { get; }
```

- *Type:* string

---

##### `BackgroundImageInput`<sup>Optional</sup> <a name="BackgroundImageInput" id="@cdktf/provider-okta.theme.Theme.property.backgroundImageInput"></a>

```csharp
public string BackgroundImageInput { get; }
```

- *Type:* string

---

##### `BrandIdInput`<sup>Optional</sup> <a name="BrandIdInput" id="@cdktf/provider-okta.theme.Theme.property.brandIdInput"></a>

```csharp
public string BrandIdInput { get; }
```

- *Type:* string

---

##### `EmailTemplateTouchPointVariantInput`<sup>Optional</sup> <a name="EmailTemplateTouchPointVariantInput" id="@cdktf/provider-okta.theme.Theme.property.emailTemplateTouchPointVariantInput"></a>

```csharp
public string EmailTemplateTouchPointVariantInput { get; }
```

- *Type:* string

---

##### `EndUserDashboardTouchPointVariantInput`<sup>Optional</sup> <a name="EndUserDashboardTouchPointVariantInput" id="@cdktf/provider-okta.theme.Theme.property.endUserDashboardTouchPointVariantInput"></a>

```csharp
public string EndUserDashboardTouchPointVariantInput { get; }
```

- *Type:* string

---

##### `ErrorPageTouchPointVariantInput`<sup>Optional</sup> <a name="ErrorPageTouchPointVariantInput" id="@cdktf/provider-okta.theme.Theme.property.errorPageTouchPointVariantInput"></a>

```csharp
public string ErrorPageTouchPointVariantInput { get; }
```

- *Type:* string

---

##### `FaviconInput`<sup>Optional</sup> <a name="FaviconInput" id="@cdktf/provider-okta.theme.Theme.property.faviconInput"></a>

```csharp
public string FaviconInput { get; }
```

- *Type:* string

---

##### `LogoInput`<sup>Optional</sup> <a name="LogoInput" id="@cdktf/provider-okta.theme.Theme.property.logoInput"></a>

```csharp
public string LogoInput { get; }
```

- *Type:* string

---

##### `PrimaryColorContrastHexInput`<sup>Optional</sup> <a name="PrimaryColorContrastHexInput" id="@cdktf/provider-okta.theme.Theme.property.primaryColorContrastHexInput"></a>

```csharp
public string PrimaryColorContrastHexInput { get; }
```

- *Type:* string

---

##### `PrimaryColorHexInput`<sup>Optional</sup> <a name="PrimaryColorHexInput" id="@cdktf/provider-okta.theme.Theme.property.primaryColorHexInput"></a>

```csharp
public string PrimaryColorHexInput { get; }
```

- *Type:* string

---

##### `SecondaryColorContrastHexInput`<sup>Optional</sup> <a name="SecondaryColorContrastHexInput" id="@cdktf/provider-okta.theme.Theme.property.secondaryColorContrastHexInput"></a>

```csharp
public string SecondaryColorContrastHexInput { get; }
```

- *Type:* string

---

##### `SecondaryColorHexInput`<sup>Optional</sup> <a name="SecondaryColorHexInput" id="@cdktf/provider-okta.theme.Theme.property.secondaryColorHexInput"></a>

```csharp
public string SecondaryColorHexInput { get; }
```

- *Type:* string

---

##### `SignInPageTouchPointVariantInput`<sup>Optional</sup> <a name="SignInPageTouchPointVariantInput" id="@cdktf/provider-okta.theme.Theme.property.signInPageTouchPointVariantInput"></a>

```csharp
public string SignInPageTouchPointVariantInput { get; }
```

- *Type:* string

---

##### `ThemeIdInput`<sup>Optional</sup> <a name="ThemeIdInput" id="@cdktf/provider-okta.theme.Theme.property.themeIdInput"></a>

```csharp
public string ThemeIdInput { get; }
```

- *Type:* string

---

##### `BackgroundImage`<sup>Required</sup> <a name="BackgroundImage" id="@cdktf/provider-okta.theme.Theme.property.backgroundImage"></a>

```csharp
public string BackgroundImage { get; }
```

- *Type:* string

---

##### `BrandId`<sup>Required</sup> <a name="BrandId" id="@cdktf/provider-okta.theme.Theme.property.brandId"></a>

```csharp
public string BrandId { get; }
```

- *Type:* string

---

##### `EmailTemplateTouchPointVariant`<sup>Required</sup> <a name="EmailTemplateTouchPointVariant" id="@cdktf/provider-okta.theme.Theme.property.emailTemplateTouchPointVariant"></a>

```csharp
public string EmailTemplateTouchPointVariant { get; }
```

- *Type:* string

---

##### `EndUserDashboardTouchPointVariant`<sup>Required</sup> <a name="EndUserDashboardTouchPointVariant" id="@cdktf/provider-okta.theme.Theme.property.endUserDashboardTouchPointVariant"></a>

```csharp
public string EndUserDashboardTouchPointVariant { get; }
```

- *Type:* string

---

##### `ErrorPageTouchPointVariant`<sup>Required</sup> <a name="ErrorPageTouchPointVariant" id="@cdktf/provider-okta.theme.Theme.property.errorPageTouchPointVariant"></a>

```csharp
public string ErrorPageTouchPointVariant { get; }
```

- *Type:* string

---

##### `Favicon`<sup>Required</sup> <a name="Favicon" id="@cdktf/provider-okta.theme.Theme.property.favicon"></a>

```csharp
public string Favicon { get; }
```

- *Type:* string

---

##### `Logo`<sup>Required</sup> <a name="Logo" id="@cdktf/provider-okta.theme.Theme.property.logo"></a>

```csharp
public string Logo { get; }
```

- *Type:* string

---

##### `PrimaryColorContrastHex`<sup>Required</sup> <a name="PrimaryColorContrastHex" id="@cdktf/provider-okta.theme.Theme.property.primaryColorContrastHex"></a>

```csharp
public string PrimaryColorContrastHex { get; }
```

- *Type:* string

---

##### `PrimaryColorHex`<sup>Required</sup> <a name="PrimaryColorHex" id="@cdktf/provider-okta.theme.Theme.property.primaryColorHex"></a>

```csharp
public string PrimaryColorHex { get; }
```

- *Type:* string

---

##### `SecondaryColorContrastHex`<sup>Required</sup> <a name="SecondaryColorContrastHex" id="@cdktf/provider-okta.theme.Theme.property.secondaryColorContrastHex"></a>

```csharp
public string SecondaryColorContrastHex { get; }
```

- *Type:* string

---

##### `SecondaryColorHex`<sup>Required</sup> <a name="SecondaryColorHex" id="@cdktf/provider-okta.theme.Theme.property.secondaryColorHex"></a>

```csharp
public string SecondaryColorHex { get; }
```

- *Type:* string

---

##### `SignInPageTouchPointVariant`<sup>Required</sup> <a name="SignInPageTouchPointVariant" id="@cdktf/provider-okta.theme.Theme.property.signInPageTouchPointVariant"></a>

```csharp
public string SignInPageTouchPointVariant { get; }
```

- *Type:* string

---

##### `ThemeId`<sup>Required</sup> <a name="ThemeId" id="@cdktf/provider-okta.theme.Theme.property.themeId"></a>

```csharp
public string ThemeId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.theme.Theme.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ThemeConfig <a name="ThemeConfig" id="@cdktf/provider-okta.theme.ThemeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.theme.ThemeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new ThemeConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BrandId,
    string BackgroundImage = null,
    string EmailTemplateTouchPointVariant = null,
    string EndUserDashboardTouchPointVariant = null,
    string ErrorPageTouchPointVariant = null,
    string Favicon = null,
    string Logo = null,
    string PrimaryColorContrastHex = null,
    string PrimaryColorHex = null,
    string SecondaryColorContrastHex = null,
    string SecondaryColorHex = null,
    string SignInPageTouchPointVariant = null,
    string ThemeId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.brandId">BrandId</a></code> | <code>string</code> | Brand ID. |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.backgroundImage">BackgroundImage</a></code> | <code>string</code> | Path to local file. |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.emailTemplateTouchPointVariant">EmailTemplateTouchPointVariant</a></code> | <code>string</code> | Variant for email templates (`OKTA_DEFAULT`, `FULL_THEME`). |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.endUserDashboardTouchPointVariant">EndUserDashboardTouchPointVariant</a></code> | <code>string</code> | Variant for the Okta End-User Dashboard (`OKTA_DEFAULT`, `WHITE_LOGO_BACKGROUND`, `FULL_THEME`, `LOGO_ON_FULL_WHITE_BACKGROUND`). |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.errorPageTouchPointVariant">ErrorPageTouchPointVariant</a></code> | <code>string</code> | Variant for the error page (`OKTA_DEFAULT`, `BACKGROUND_SECONDARY_COLOR`, `BACKGROUND_IMAGE`). |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.favicon">Favicon</a></code> | <code>string</code> | Path to local file. |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.logo">Logo</a></code> | <code>string</code> | Path to local file. |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.primaryColorContrastHex">PrimaryColorContrastHex</a></code> | <code>string</code> | Primary color contrast hex code. |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.primaryColorHex">PrimaryColorHex</a></code> | <code>string</code> | Primary color hex code. |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.secondaryColorContrastHex">SecondaryColorContrastHex</a></code> | <code>string</code> | Secondary color contrast hex code. |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.secondaryColorHex">SecondaryColorHex</a></code> | <code>string</code> | Secondary color hex code. |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.signInPageTouchPointVariant">SignInPageTouchPointVariant</a></code> | <code>string</code> | Variant for the Okta Sign-In Page (`OKTA_DEFAULT`, `BACKGROUND_SECONDARY_COLOR`, `BACKGROUND_IMAGE`). |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.themeId">ThemeId</a></code> | <code>string</code> | Theme ID - Note: Okta API for theme only reads and updates therefore the okta_theme resource needs to act as a quasi data source. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.theme.ThemeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.theme.ThemeConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.theme.ThemeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.theme.ThemeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.theme.ThemeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.theme.ThemeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.theme.ThemeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BrandId`<sup>Required</sup> <a name="BrandId" id="@cdktf/provider-okta.theme.ThemeConfig.property.brandId"></a>

```csharp
public string BrandId { get; set; }
```

- *Type:* string

Brand ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#brand_id Theme#brand_id}

---

##### `BackgroundImage`<sup>Optional</sup> <a name="BackgroundImage" id="@cdktf/provider-okta.theme.ThemeConfig.property.backgroundImage"></a>

```csharp
public string BackgroundImage { get; set; }
```

- *Type:* string

Path to local file.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#background_image Theme#background_image}

---

##### `EmailTemplateTouchPointVariant`<sup>Optional</sup> <a name="EmailTemplateTouchPointVariant" id="@cdktf/provider-okta.theme.ThemeConfig.property.emailTemplateTouchPointVariant"></a>

```csharp
public string EmailTemplateTouchPointVariant { get; set; }
```

- *Type:* string

Variant for email templates (`OKTA_DEFAULT`, `FULL_THEME`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#email_template_touch_point_variant Theme#email_template_touch_point_variant}

---

##### `EndUserDashboardTouchPointVariant`<sup>Optional</sup> <a name="EndUserDashboardTouchPointVariant" id="@cdktf/provider-okta.theme.ThemeConfig.property.endUserDashboardTouchPointVariant"></a>

```csharp
public string EndUserDashboardTouchPointVariant { get; set; }
```

- *Type:* string

Variant for the Okta End-User Dashboard (`OKTA_DEFAULT`, `WHITE_LOGO_BACKGROUND`, `FULL_THEME`, `LOGO_ON_FULL_WHITE_BACKGROUND`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#end_user_dashboard_touch_point_variant Theme#end_user_dashboard_touch_point_variant}

---

##### `ErrorPageTouchPointVariant`<sup>Optional</sup> <a name="ErrorPageTouchPointVariant" id="@cdktf/provider-okta.theme.ThemeConfig.property.errorPageTouchPointVariant"></a>

```csharp
public string ErrorPageTouchPointVariant { get; set; }
```

- *Type:* string

Variant for the error page (`OKTA_DEFAULT`, `BACKGROUND_SECONDARY_COLOR`, `BACKGROUND_IMAGE`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#error_page_touch_point_variant Theme#error_page_touch_point_variant}

---

##### `Favicon`<sup>Optional</sup> <a name="Favicon" id="@cdktf/provider-okta.theme.ThemeConfig.property.favicon"></a>

```csharp
public string Favicon { get; set; }
```

- *Type:* string

Path to local file.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#favicon Theme#favicon}

---

##### `Logo`<sup>Optional</sup> <a name="Logo" id="@cdktf/provider-okta.theme.ThemeConfig.property.logo"></a>

```csharp
public string Logo { get; set; }
```

- *Type:* string

Path to local file.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#logo Theme#logo}

---

##### `PrimaryColorContrastHex`<sup>Optional</sup> <a name="PrimaryColorContrastHex" id="@cdktf/provider-okta.theme.ThemeConfig.property.primaryColorContrastHex"></a>

```csharp
public string PrimaryColorContrastHex { get; set; }
```

- *Type:* string

Primary color contrast hex code.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#primary_color_contrast_hex Theme#primary_color_contrast_hex}

---

##### `PrimaryColorHex`<sup>Optional</sup> <a name="PrimaryColorHex" id="@cdktf/provider-okta.theme.ThemeConfig.property.primaryColorHex"></a>

```csharp
public string PrimaryColorHex { get; set; }
```

- *Type:* string

Primary color hex code.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#primary_color_hex Theme#primary_color_hex}

---

##### `SecondaryColorContrastHex`<sup>Optional</sup> <a name="SecondaryColorContrastHex" id="@cdktf/provider-okta.theme.ThemeConfig.property.secondaryColorContrastHex"></a>

```csharp
public string SecondaryColorContrastHex { get; set; }
```

- *Type:* string

Secondary color contrast hex code.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#secondary_color_contrast_hex Theme#secondary_color_contrast_hex}

---

##### `SecondaryColorHex`<sup>Optional</sup> <a name="SecondaryColorHex" id="@cdktf/provider-okta.theme.ThemeConfig.property.secondaryColorHex"></a>

```csharp
public string SecondaryColorHex { get; set; }
```

- *Type:* string

Secondary color hex code.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#secondary_color_hex Theme#secondary_color_hex}

---

##### `SignInPageTouchPointVariant`<sup>Optional</sup> <a name="SignInPageTouchPointVariant" id="@cdktf/provider-okta.theme.ThemeConfig.property.signInPageTouchPointVariant"></a>

```csharp
public string SignInPageTouchPointVariant { get; set; }
```

- *Type:* string

Variant for the Okta Sign-In Page (`OKTA_DEFAULT`, `BACKGROUND_SECONDARY_COLOR`, `BACKGROUND_IMAGE`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#sign_in_page_touch_point_variant Theme#sign_in_page_touch_point_variant}

---

##### `ThemeId`<sup>Optional</sup> <a name="ThemeId" id="@cdktf/provider-okta.theme.ThemeConfig.property.themeId"></a>

```csharp
public string ThemeId { get; set; }
```

- *Type:* string

Theme ID - Note: Okta API for theme only reads and updates therefore the okta_theme resource needs to act as a quasi data source.

Do this by setting theme_id.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#theme_id Theme#theme_id}

---



