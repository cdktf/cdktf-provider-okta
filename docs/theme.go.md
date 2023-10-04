# `okta_theme`

Refer to the Terraform Registory for docs: [`okta_theme`](https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/theme).

# `theme` Submodule <a name="`theme` Submodule" id="@cdktf/provider-okta.theme"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Theme <a name="Theme" id="@cdktf/provider-okta.theme.Theme"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/theme okta_theme}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.theme.Theme.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/theme"

theme.NewTheme(scope Construct, id *string, config ThemeConfig) Theme
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.theme.ThemeConfig">ThemeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.theme.Theme.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.theme.Theme.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.theme.Theme.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.theme.Theme.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.theme.Theme.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.theme.Theme.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.theme.Theme.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.theme.Theme.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.theme.Theme.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.theme.Theme.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.theme.Theme.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.theme.Theme.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.theme.Theme.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.theme.Theme.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.theme.Theme.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.theme.Theme.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.theme.Theme.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.theme.Theme.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.theme.Theme.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.theme.Theme.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.theme.Theme.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.theme.Theme.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.theme.Theme.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.theme.Theme.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.theme.Theme.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.theme.Theme.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.theme.Theme.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.theme.Theme.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetBackgroundImage` <a name="ResetBackgroundImage" id="@cdktf/provider-okta.theme.Theme.resetBackgroundImage"></a>

```go
func ResetBackgroundImage()
```

##### `ResetEmailTemplateTouchPointVariant` <a name="ResetEmailTemplateTouchPointVariant" id="@cdktf/provider-okta.theme.Theme.resetEmailTemplateTouchPointVariant"></a>

```go
func ResetEmailTemplateTouchPointVariant()
```

##### `ResetEndUserDashboardTouchPointVariant` <a name="ResetEndUserDashboardTouchPointVariant" id="@cdktf/provider-okta.theme.Theme.resetEndUserDashboardTouchPointVariant"></a>

```go
func ResetEndUserDashboardTouchPointVariant()
```

##### `ResetErrorPageTouchPointVariant` <a name="ResetErrorPageTouchPointVariant" id="@cdktf/provider-okta.theme.Theme.resetErrorPageTouchPointVariant"></a>

```go
func ResetErrorPageTouchPointVariant()
```

##### `ResetFavicon` <a name="ResetFavicon" id="@cdktf/provider-okta.theme.Theme.resetFavicon"></a>

```go
func ResetFavicon()
```

##### `ResetLogo` <a name="ResetLogo" id="@cdktf/provider-okta.theme.Theme.resetLogo"></a>

```go
func ResetLogo()
```

##### `ResetPrimaryColorContrastHex` <a name="ResetPrimaryColorContrastHex" id="@cdktf/provider-okta.theme.Theme.resetPrimaryColorContrastHex"></a>

```go
func ResetPrimaryColorContrastHex()
```

##### `ResetPrimaryColorHex` <a name="ResetPrimaryColorHex" id="@cdktf/provider-okta.theme.Theme.resetPrimaryColorHex"></a>

```go
func ResetPrimaryColorHex()
```

##### `ResetSecondaryColorContrastHex` <a name="ResetSecondaryColorContrastHex" id="@cdktf/provider-okta.theme.Theme.resetSecondaryColorContrastHex"></a>

```go
func ResetSecondaryColorContrastHex()
```

##### `ResetSecondaryColorHex` <a name="ResetSecondaryColorHex" id="@cdktf/provider-okta.theme.Theme.resetSecondaryColorHex"></a>

```go
func ResetSecondaryColorHex()
```

##### `ResetSignInPageTouchPointVariant` <a name="ResetSignInPageTouchPointVariant" id="@cdktf/provider-okta.theme.Theme.resetSignInPageTouchPointVariant"></a>

```go
func ResetSignInPageTouchPointVariant()
```

##### `ResetThemeId` <a name="ResetThemeId" id="@cdktf/provider-okta.theme.Theme.resetThemeId"></a>

```go
func ResetThemeId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.theme.Theme.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.theme.Theme.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/theme"

theme.Theme_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.theme.Theme.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/theme"

theme.Theme_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.theme.Theme.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.theme.Theme.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/theme"

theme.Theme_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.theme.Theme.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.backgroundImageUrl">BackgroundImageUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.faviconUrl">FaviconUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.links">Links</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.logoUrl">LogoUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.backgroundImageInput">BackgroundImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.brandIdInput">BrandIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.emailTemplateTouchPointVariantInput">EmailTemplateTouchPointVariantInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.endUserDashboardTouchPointVariantInput">EndUserDashboardTouchPointVariantInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.errorPageTouchPointVariantInput">ErrorPageTouchPointVariantInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.faviconInput">FaviconInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.logoInput">LogoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.primaryColorContrastHexInput">PrimaryColorContrastHexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.primaryColorHexInput">PrimaryColorHexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.secondaryColorContrastHexInput">SecondaryColorContrastHexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.secondaryColorHexInput">SecondaryColorHexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.signInPageTouchPointVariantInput">SignInPageTouchPointVariantInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.themeIdInput">ThemeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.backgroundImage">BackgroundImage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.brandId">BrandId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.emailTemplateTouchPointVariant">EmailTemplateTouchPointVariant</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.endUserDashboardTouchPointVariant">EndUserDashboardTouchPointVariant</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.errorPageTouchPointVariant">ErrorPageTouchPointVariant</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.favicon">Favicon</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.logo">Logo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.primaryColorContrastHex">PrimaryColorContrastHex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.primaryColorHex">PrimaryColorHex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.secondaryColorContrastHex">SecondaryColorContrastHex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.secondaryColorHex">SecondaryColorHex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.signInPageTouchPointVariant">SignInPageTouchPointVariant</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.themeId">ThemeId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.theme.Theme.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.theme.Theme.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.theme.Theme.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.theme.Theme.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.theme.Theme.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.theme.Theme.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.theme.Theme.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.theme.Theme.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.theme.Theme.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.theme.Theme.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.theme.Theme.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.theme.Theme.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.theme.Theme.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.theme.Theme.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackgroundImageUrl`<sup>Required</sup> <a name="BackgroundImageUrl" id="@cdktf/provider-okta.theme.Theme.property.backgroundImageUrl"></a>

```go
func BackgroundImageUrl() *string
```

- *Type:* *string

---

##### `FaviconUrl`<sup>Required</sup> <a name="FaviconUrl" id="@cdktf/provider-okta.theme.Theme.property.faviconUrl"></a>

```go
func FaviconUrl() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.theme.Theme.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Links`<sup>Required</sup> <a name="Links" id="@cdktf/provider-okta.theme.Theme.property.links"></a>

```go
func Links() *string
```

- *Type:* *string

---

##### `LogoUrl`<sup>Required</sup> <a name="LogoUrl" id="@cdktf/provider-okta.theme.Theme.property.logoUrl"></a>

```go
func LogoUrl() *string
```

- *Type:* *string

---

##### `BackgroundImageInput`<sup>Optional</sup> <a name="BackgroundImageInput" id="@cdktf/provider-okta.theme.Theme.property.backgroundImageInput"></a>

```go
func BackgroundImageInput() *string
```

- *Type:* *string

---

##### `BrandIdInput`<sup>Optional</sup> <a name="BrandIdInput" id="@cdktf/provider-okta.theme.Theme.property.brandIdInput"></a>

```go
func BrandIdInput() *string
```

- *Type:* *string

---

##### `EmailTemplateTouchPointVariantInput`<sup>Optional</sup> <a name="EmailTemplateTouchPointVariantInput" id="@cdktf/provider-okta.theme.Theme.property.emailTemplateTouchPointVariantInput"></a>

```go
func EmailTemplateTouchPointVariantInput() *string
```

- *Type:* *string

---

##### `EndUserDashboardTouchPointVariantInput`<sup>Optional</sup> <a name="EndUserDashboardTouchPointVariantInput" id="@cdktf/provider-okta.theme.Theme.property.endUserDashboardTouchPointVariantInput"></a>

```go
func EndUserDashboardTouchPointVariantInput() *string
```

- *Type:* *string

---

##### `ErrorPageTouchPointVariantInput`<sup>Optional</sup> <a name="ErrorPageTouchPointVariantInput" id="@cdktf/provider-okta.theme.Theme.property.errorPageTouchPointVariantInput"></a>

```go
func ErrorPageTouchPointVariantInput() *string
```

- *Type:* *string

---

##### `FaviconInput`<sup>Optional</sup> <a name="FaviconInput" id="@cdktf/provider-okta.theme.Theme.property.faviconInput"></a>

```go
func FaviconInput() *string
```

- *Type:* *string

---

##### `LogoInput`<sup>Optional</sup> <a name="LogoInput" id="@cdktf/provider-okta.theme.Theme.property.logoInput"></a>

```go
func LogoInput() *string
```

- *Type:* *string

---

##### `PrimaryColorContrastHexInput`<sup>Optional</sup> <a name="PrimaryColorContrastHexInput" id="@cdktf/provider-okta.theme.Theme.property.primaryColorContrastHexInput"></a>

```go
func PrimaryColorContrastHexInput() *string
```

- *Type:* *string

---

##### `PrimaryColorHexInput`<sup>Optional</sup> <a name="PrimaryColorHexInput" id="@cdktf/provider-okta.theme.Theme.property.primaryColorHexInput"></a>

```go
func PrimaryColorHexInput() *string
```

- *Type:* *string

---

##### `SecondaryColorContrastHexInput`<sup>Optional</sup> <a name="SecondaryColorContrastHexInput" id="@cdktf/provider-okta.theme.Theme.property.secondaryColorContrastHexInput"></a>

```go
func SecondaryColorContrastHexInput() *string
```

- *Type:* *string

---

##### `SecondaryColorHexInput`<sup>Optional</sup> <a name="SecondaryColorHexInput" id="@cdktf/provider-okta.theme.Theme.property.secondaryColorHexInput"></a>

```go
func SecondaryColorHexInput() *string
```

- *Type:* *string

---

##### `SignInPageTouchPointVariantInput`<sup>Optional</sup> <a name="SignInPageTouchPointVariantInput" id="@cdktf/provider-okta.theme.Theme.property.signInPageTouchPointVariantInput"></a>

```go
func SignInPageTouchPointVariantInput() *string
```

- *Type:* *string

---

##### `ThemeIdInput`<sup>Optional</sup> <a name="ThemeIdInput" id="@cdktf/provider-okta.theme.Theme.property.themeIdInput"></a>

```go
func ThemeIdInput() *string
```

- *Type:* *string

---

##### `BackgroundImage`<sup>Required</sup> <a name="BackgroundImage" id="@cdktf/provider-okta.theme.Theme.property.backgroundImage"></a>

```go
func BackgroundImage() *string
```

- *Type:* *string

---

##### `BrandId`<sup>Required</sup> <a name="BrandId" id="@cdktf/provider-okta.theme.Theme.property.brandId"></a>

```go
func BrandId() *string
```

- *Type:* *string

---

##### `EmailTemplateTouchPointVariant`<sup>Required</sup> <a name="EmailTemplateTouchPointVariant" id="@cdktf/provider-okta.theme.Theme.property.emailTemplateTouchPointVariant"></a>

```go
func EmailTemplateTouchPointVariant() *string
```

- *Type:* *string

---

##### `EndUserDashboardTouchPointVariant`<sup>Required</sup> <a name="EndUserDashboardTouchPointVariant" id="@cdktf/provider-okta.theme.Theme.property.endUserDashboardTouchPointVariant"></a>

```go
func EndUserDashboardTouchPointVariant() *string
```

- *Type:* *string

---

##### `ErrorPageTouchPointVariant`<sup>Required</sup> <a name="ErrorPageTouchPointVariant" id="@cdktf/provider-okta.theme.Theme.property.errorPageTouchPointVariant"></a>

```go
func ErrorPageTouchPointVariant() *string
```

- *Type:* *string

---

##### `Favicon`<sup>Required</sup> <a name="Favicon" id="@cdktf/provider-okta.theme.Theme.property.favicon"></a>

```go
func Favicon() *string
```

- *Type:* *string

---

##### `Logo`<sup>Required</sup> <a name="Logo" id="@cdktf/provider-okta.theme.Theme.property.logo"></a>

```go
func Logo() *string
```

- *Type:* *string

---

##### `PrimaryColorContrastHex`<sup>Required</sup> <a name="PrimaryColorContrastHex" id="@cdktf/provider-okta.theme.Theme.property.primaryColorContrastHex"></a>

```go
func PrimaryColorContrastHex() *string
```

- *Type:* *string

---

##### `PrimaryColorHex`<sup>Required</sup> <a name="PrimaryColorHex" id="@cdktf/provider-okta.theme.Theme.property.primaryColorHex"></a>

```go
func PrimaryColorHex() *string
```

- *Type:* *string

---

##### `SecondaryColorContrastHex`<sup>Required</sup> <a name="SecondaryColorContrastHex" id="@cdktf/provider-okta.theme.Theme.property.secondaryColorContrastHex"></a>

```go
func SecondaryColorContrastHex() *string
```

- *Type:* *string

---

##### `SecondaryColorHex`<sup>Required</sup> <a name="SecondaryColorHex" id="@cdktf/provider-okta.theme.Theme.property.secondaryColorHex"></a>

```go
func SecondaryColorHex() *string
```

- *Type:* *string

---

##### `SignInPageTouchPointVariant`<sup>Required</sup> <a name="SignInPageTouchPointVariant" id="@cdktf/provider-okta.theme.Theme.property.signInPageTouchPointVariant"></a>

```go
func SignInPageTouchPointVariant() *string
```

- *Type:* *string

---

##### `ThemeId`<sup>Required</sup> <a name="ThemeId" id="@cdktf/provider-okta.theme.Theme.property.themeId"></a>

```go
func ThemeId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.theme.Theme.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ThemeConfig <a name="ThemeConfig" id="@cdktf/provider-okta.theme.ThemeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.theme.ThemeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/theme"

&theme.ThemeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BrandId: *string,
	BackgroundImage: *string,
	EmailTemplateTouchPointVariant: *string,
	EndUserDashboardTouchPointVariant: *string,
	ErrorPageTouchPointVariant: *string,
	Favicon: *string,
	Logo: *string,
	PrimaryColorContrastHex: *string,
	PrimaryColorHex: *string,
	SecondaryColorContrastHex: *string,
	SecondaryColorHex: *string,
	SignInPageTouchPointVariant: *string,
	ThemeId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.brandId">BrandId</a></code> | <code>*string</code> | Brand ID. |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.backgroundImage">BackgroundImage</a></code> | <code>*string</code> | Path to local file. |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.emailTemplateTouchPointVariant">EmailTemplateTouchPointVariant</a></code> | <code>*string</code> | Variant for email templates (`OKTA_DEFAULT`, `FULL_THEME`). |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.endUserDashboardTouchPointVariant">EndUserDashboardTouchPointVariant</a></code> | <code>*string</code> | Variant for the Okta End-User Dashboard (`OKTA_DEFAULT`, `WHITE_LOGO_BACKGROUND`, `FULL_THEME`, `LOGO_ON_FULL_WHITE_BACKGROUND`). |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.errorPageTouchPointVariant">ErrorPageTouchPointVariant</a></code> | <code>*string</code> | Variant for the error page (`OKTA_DEFAULT`, `BACKGROUND_SECONDARY_COLOR`, `BACKGROUND_IMAGE`). |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.favicon">Favicon</a></code> | <code>*string</code> | Path to local file. |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.logo">Logo</a></code> | <code>*string</code> | Path to local file. |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.primaryColorContrastHex">PrimaryColorContrastHex</a></code> | <code>*string</code> | Primary color contrast hex code. |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.primaryColorHex">PrimaryColorHex</a></code> | <code>*string</code> | Primary color hex code. |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.secondaryColorContrastHex">SecondaryColorContrastHex</a></code> | <code>*string</code> | Secondary color contrast hex code. |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.secondaryColorHex">SecondaryColorHex</a></code> | <code>*string</code> | Secondary color hex code. |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.signInPageTouchPointVariant">SignInPageTouchPointVariant</a></code> | <code>*string</code> | Variant for the Okta Sign-In Page (`OKTA_DEFAULT`, `BACKGROUND_SECONDARY_COLOR`, `BACKGROUND_IMAGE`). |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.themeId">ThemeId</a></code> | <code>*string</code> | Theme ID - Note: Okta API for theme only reads and updates therefore the okta_theme resource needs to act as a quasi data source. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.theme.ThemeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.theme.ThemeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.theme.ThemeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.theme.ThemeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.theme.ThemeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.theme.ThemeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.theme.ThemeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BrandId`<sup>Required</sup> <a name="BrandId" id="@cdktf/provider-okta.theme.ThemeConfig.property.brandId"></a>

```go
BrandId *string
```

- *Type:* *string

Brand ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/theme#brand_id Theme#brand_id}

---

##### `BackgroundImage`<sup>Optional</sup> <a name="BackgroundImage" id="@cdktf/provider-okta.theme.ThemeConfig.property.backgroundImage"></a>

```go
BackgroundImage *string
```

- *Type:* *string

Path to local file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/theme#background_image Theme#background_image}

---

##### `EmailTemplateTouchPointVariant`<sup>Optional</sup> <a name="EmailTemplateTouchPointVariant" id="@cdktf/provider-okta.theme.ThemeConfig.property.emailTemplateTouchPointVariant"></a>

```go
EmailTemplateTouchPointVariant *string
```

- *Type:* *string

Variant for email templates (`OKTA_DEFAULT`, `FULL_THEME`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/theme#email_template_touch_point_variant Theme#email_template_touch_point_variant}

---

##### `EndUserDashboardTouchPointVariant`<sup>Optional</sup> <a name="EndUserDashboardTouchPointVariant" id="@cdktf/provider-okta.theme.ThemeConfig.property.endUserDashboardTouchPointVariant"></a>

```go
EndUserDashboardTouchPointVariant *string
```

- *Type:* *string

Variant for the Okta End-User Dashboard (`OKTA_DEFAULT`, `WHITE_LOGO_BACKGROUND`, `FULL_THEME`, `LOGO_ON_FULL_WHITE_BACKGROUND`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/theme#end_user_dashboard_touch_point_variant Theme#end_user_dashboard_touch_point_variant}

---

##### `ErrorPageTouchPointVariant`<sup>Optional</sup> <a name="ErrorPageTouchPointVariant" id="@cdktf/provider-okta.theme.ThemeConfig.property.errorPageTouchPointVariant"></a>

```go
ErrorPageTouchPointVariant *string
```

- *Type:* *string

Variant for the error page (`OKTA_DEFAULT`, `BACKGROUND_SECONDARY_COLOR`, `BACKGROUND_IMAGE`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/theme#error_page_touch_point_variant Theme#error_page_touch_point_variant}

---

##### `Favicon`<sup>Optional</sup> <a name="Favicon" id="@cdktf/provider-okta.theme.ThemeConfig.property.favicon"></a>

```go
Favicon *string
```

- *Type:* *string

Path to local file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/theme#favicon Theme#favicon}

---

##### `Logo`<sup>Optional</sup> <a name="Logo" id="@cdktf/provider-okta.theme.ThemeConfig.property.logo"></a>

```go
Logo *string
```

- *Type:* *string

Path to local file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/theme#logo Theme#logo}

---

##### `PrimaryColorContrastHex`<sup>Optional</sup> <a name="PrimaryColorContrastHex" id="@cdktf/provider-okta.theme.ThemeConfig.property.primaryColorContrastHex"></a>

```go
PrimaryColorContrastHex *string
```

- *Type:* *string

Primary color contrast hex code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/theme#primary_color_contrast_hex Theme#primary_color_contrast_hex}

---

##### `PrimaryColorHex`<sup>Optional</sup> <a name="PrimaryColorHex" id="@cdktf/provider-okta.theme.ThemeConfig.property.primaryColorHex"></a>

```go
PrimaryColorHex *string
```

- *Type:* *string

Primary color hex code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/theme#primary_color_hex Theme#primary_color_hex}

---

##### `SecondaryColorContrastHex`<sup>Optional</sup> <a name="SecondaryColorContrastHex" id="@cdktf/provider-okta.theme.ThemeConfig.property.secondaryColorContrastHex"></a>

```go
SecondaryColorContrastHex *string
```

- *Type:* *string

Secondary color contrast hex code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/theme#secondary_color_contrast_hex Theme#secondary_color_contrast_hex}

---

##### `SecondaryColorHex`<sup>Optional</sup> <a name="SecondaryColorHex" id="@cdktf/provider-okta.theme.ThemeConfig.property.secondaryColorHex"></a>

```go
SecondaryColorHex *string
```

- *Type:* *string

Secondary color hex code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/theme#secondary_color_hex Theme#secondary_color_hex}

---

##### `SignInPageTouchPointVariant`<sup>Optional</sup> <a name="SignInPageTouchPointVariant" id="@cdktf/provider-okta.theme.ThemeConfig.property.signInPageTouchPointVariant"></a>

```go
SignInPageTouchPointVariant *string
```

- *Type:* *string

Variant for the Okta Sign-In Page (`OKTA_DEFAULT`, `BACKGROUND_SECONDARY_COLOR`, `BACKGROUND_IMAGE`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/theme#sign_in_page_touch_point_variant Theme#sign_in_page_touch_point_variant}

---

##### `ThemeId`<sup>Optional</sup> <a name="ThemeId" id="@cdktf/provider-okta.theme.ThemeConfig.property.themeId"></a>

```go
ThemeId *string
```

- *Type:* *string

Theme ID - Note: Okta API for theme only reads and updates therefore the okta_theme resource needs to act as a quasi data source.

Do this by setting theme_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/theme#theme_id Theme#theme_id}

---



