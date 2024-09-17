# `theme` Submodule <a name="`theme` Submodule" id="@cdktf/provider-okta.theme"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Theme <a name="Theme" id="@cdktf/provider-okta.theme.Theme"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/theme okta_theme}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.theme.Theme.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.theme.Theme;

Theme.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .brandId(java.lang.String)
//  .backgroundImage(java.lang.String)
//  .emailTemplateTouchPointVariant(java.lang.String)
//  .endUserDashboardTouchPointVariant(java.lang.String)
//  .errorPageTouchPointVariant(java.lang.String)
//  .favicon(java.lang.String)
//  .logo(java.lang.String)
//  .primaryColorContrastHex(java.lang.String)
//  .primaryColorHex(java.lang.String)
//  .secondaryColorContrastHex(java.lang.String)
//  .secondaryColorHex(java.lang.String)
//  .signInPageTouchPointVariant(java.lang.String)
//  .themeId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.brandId">brandId</a></code> | <code>java.lang.String</code> | Brand ID. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.backgroundImage">backgroundImage</a></code> | <code>java.lang.String</code> | Path to local file. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.emailTemplateTouchPointVariant">emailTemplateTouchPointVariant</a></code> | <code>java.lang.String</code> | Variant for email templates (`OKTA_DEFAULT`, `FULL_THEME`). |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.endUserDashboardTouchPointVariant">endUserDashboardTouchPointVariant</a></code> | <code>java.lang.String</code> | Variant for the Okta End-User Dashboard (`OKTA_DEFAULT`, `WHITE_LOGO_BACKGROUND`, `FULL_THEME`, `LOGO_ON_FULL_WHITE_BACKGROUND`). |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.errorPageTouchPointVariant">errorPageTouchPointVariant</a></code> | <code>java.lang.String</code> | Variant for the error page (`OKTA_DEFAULT`, `BACKGROUND_SECONDARY_COLOR`, `BACKGROUND_IMAGE`). |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.favicon">favicon</a></code> | <code>java.lang.String</code> | Path to local file. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.logo">logo</a></code> | <code>java.lang.String</code> | Path to local file. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.primaryColorContrastHex">primaryColorContrastHex</a></code> | <code>java.lang.String</code> | Primary color contrast hex code. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.primaryColorHex">primaryColorHex</a></code> | <code>java.lang.String</code> | Primary color hex code. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.secondaryColorContrastHex">secondaryColorContrastHex</a></code> | <code>java.lang.String</code> | Secondary color contrast hex code. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.secondaryColorHex">secondaryColorHex</a></code> | <code>java.lang.String</code> | Secondary color hex code. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.signInPageTouchPointVariant">signInPageTouchPointVariant</a></code> | <code>java.lang.String</code> | Variant for the Okta Sign-In Page (`OKTA_DEFAULT`, `BACKGROUND_SECONDARY_COLOR`, `BACKGROUND_IMAGE`). |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.themeId">themeId</a></code> | <code>java.lang.String</code> | Theme ID - Note: Okta API for theme only reads and updates therefore the okta_theme resource needs to act as a quasi data source. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `brandId`<sup>Required</sup> <a name="brandId" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.brandId"></a>

- *Type:* java.lang.String

Brand ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/theme#brand_id Theme#brand_id}

---

##### `backgroundImage`<sup>Optional</sup> <a name="backgroundImage" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.backgroundImage"></a>

- *Type:* java.lang.String

Path to local file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/theme#background_image Theme#background_image}

---

##### `emailTemplateTouchPointVariant`<sup>Optional</sup> <a name="emailTemplateTouchPointVariant" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.emailTemplateTouchPointVariant"></a>

- *Type:* java.lang.String

Variant for email templates (`OKTA_DEFAULT`, `FULL_THEME`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/theme#email_template_touch_point_variant Theme#email_template_touch_point_variant}

---

##### `endUserDashboardTouchPointVariant`<sup>Optional</sup> <a name="endUserDashboardTouchPointVariant" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.endUserDashboardTouchPointVariant"></a>

- *Type:* java.lang.String

Variant for the Okta End-User Dashboard (`OKTA_DEFAULT`, `WHITE_LOGO_BACKGROUND`, `FULL_THEME`, `LOGO_ON_FULL_WHITE_BACKGROUND`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/theme#end_user_dashboard_touch_point_variant Theme#end_user_dashboard_touch_point_variant}

---

##### `errorPageTouchPointVariant`<sup>Optional</sup> <a name="errorPageTouchPointVariant" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.errorPageTouchPointVariant"></a>

- *Type:* java.lang.String

Variant for the error page (`OKTA_DEFAULT`, `BACKGROUND_SECONDARY_COLOR`, `BACKGROUND_IMAGE`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/theme#error_page_touch_point_variant Theme#error_page_touch_point_variant}

---

##### `favicon`<sup>Optional</sup> <a name="favicon" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.favicon"></a>

- *Type:* java.lang.String

Path to local file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/theme#favicon Theme#favicon}

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.logo"></a>

- *Type:* java.lang.String

Path to local file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/theme#logo Theme#logo}

---

##### `primaryColorContrastHex`<sup>Optional</sup> <a name="primaryColorContrastHex" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.primaryColorContrastHex"></a>

- *Type:* java.lang.String

Primary color contrast hex code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/theme#primary_color_contrast_hex Theme#primary_color_contrast_hex}

---

##### `primaryColorHex`<sup>Optional</sup> <a name="primaryColorHex" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.primaryColorHex"></a>

- *Type:* java.lang.String

Primary color hex code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/theme#primary_color_hex Theme#primary_color_hex}

---

##### `secondaryColorContrastHex`<sup>Optional</sup> <a name="secondaryColorContrastHex" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.secondaryColorContrastHex"></a>

- *Type:* java.lang.String

Secondary color contrast hex code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/theme#secondary_color_contrast_hex Theme#secondary_color_contrast_hex}

---

##### `secondaryColorHex`<sup>Optional</sup> <a name="secondaryColorHex" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.secondaryColorHex"></a>

- *Type:* java.lang.String

Secondary color hex code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/theme#secondary_color_hex Theme#secondary_color_hex}

---

##### `signInPageTouchPointVariant`<sup>Optional</sup> <a name="signInPageTouchPointVariant" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.signInPageTouchPointVariant"></a>

- *Type:* java.lang.String

Variant for the Okta Sign-In Page (`OKTA_DEFAULT`, `BACKGROUND_SECONDARY_COLOR`, `BACKGROUND_IMAGE`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/theme#sign_in_page_touch_point_variant Theme#sign_in_page_touch_point_variant}

---

##### `themeId`<sup>Optional</sup> <a name="themeId" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.themeId"></a>

- *Type:* java.lang.String

Theme ID - Note: Okta API for theme only reads and updates therefore the okta_theme resource needs to act as a quasi data source.

Do this by setting theme_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/theme#theme_id Theme#theme_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.theme.Theme.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.theme.Theme.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.theme.Theme.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.theme.Theme.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.theme.Theme.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.theme.Theme.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.theme.Theme.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.theme.Theme.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.theme.Theme.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.theme.Theme.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.theme.Theme.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.theme.Theme.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.theme.Theme.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.theme.Theme.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.theme.Theme.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.theme.Theme.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.theme.Theme.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.theme.Theme.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.theme.Theme.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.theme.Theme.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.theme.Theme.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.theme.Theme.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.theme.Theme.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.theme.Theme.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.theme.Theme.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.theme.Theme.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.theme.Theme.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.theme.Theme.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.theme.Theme.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.theme.Theme.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.theme.Theme.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.theme.Theme.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.theme.Theme.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.theme.Theme.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.theme.Theme.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.theme.Theme.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.theme.Theme.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.theme.Theme.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.theme.Theme.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.theme.Theme.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.theme.Theme.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.theme.Theme.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.theme.Theme.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBackgroundImage` <a name="resetBackgroundImage" id="@cdktf/provider-okta.theme.Theme.resetBackgroundImage"></a>

```java
public void resetBackgroundImage()
```

##### `resetEmailTemplateTouchPointVariant` <a name="resetEmailTemplateTouchPointVariant" id="@cdktf/provider-okta.theme.Theme.resetEmailTemplateTouchPointVariant"></a>

```java
public void resetEmailTemplateTouchPointVariant()
```

##### `resetEndUserDashboardTouchPointVariant` <a name="resetEndUserDashboardTouchPointVariant" id="@cdktf/provider-okta.theme.Theme.resetEndUserDashboardTouchPointVariant"></a>

```java
public void resetEndUserDashboardTouchPointVariant()
```

##### `resetErrorPageTouchPointVariant` <a name="resetErrorPageTouchPointVariant" id="@cdktf/provider-okta.theme.Theme.resetErrorPageTouchPointVariant"></a>

```java
public void resetErrorPageTouchPointVariant()
```

##### `resetFavicon` <a name="resetFavicon" id="@cdktf/provider-okta.theme.Theme.resetFavicon"></a>

```java
public void resetFavicon()
```

##### `resetLogo` <a name="resetLogo" id="@cdktf/provider-okta.theme.Theme.resetLogo"></a>

```java
public void resetLogo()
```

##### `resetPrimaryColorContrastHex` <a name="resetPrimaryColorContrastHex" id="@cdktf/provider-okta.theme.Theme.resetPrimaryColorContrastHex"></a>

```java
public void resetPrimaryColorContrastHex()
```

##### `resetPrimaryColorHex` <a name="resetPrimaryColorHex" id="@cdktf/provider-okta.theme.Theme.resetPrimaryColorHex"></a>

```java
public void resetPrimaryColorHex()
```

##### `resetSecondaryColorContrastHex` <a name="resetSecondaryColorContrastHex" id="@cdktf/provider-okta.theme.Theme.resetSecondaryColorContrastHex"></a>

```java
public void resetSecondaryColorContrastHex()
```

##### `resetSecondaryColorHex` <a name="resetSecondaryColorHex" id="@cdktf/provider-okta.theme.Theme.resetSecondaryColorHex"></a>

```java
public void resetSecondaryColorHex()
```

##### `resetSignInPageTouchPointVariant` <a name="resetSignInPageTouchPointVariant" id="@cdktf/provider-okta.theme.Theme.resetSignInPageTouchPointVariant"></a>

```java
public void resetSignInPageTouchPointVariant()
```

##### `resetThemeId` <a name="resetThemeId" id="@cdktf/provider-okta.theme.Theme.resetThemeId"></a>

```java
public void resetThemeId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.theme.Theme.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Theme resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.theme.Theme.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.theme.Theme;

Theme.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.theme.Theme.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.theme.Theme;

Theme.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.theme.Theme.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.theme.Theme.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.theme.Theme;

Theme.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.theme.Theme.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.theme.Theme.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.okta.theme.Theme;

Theme.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Theme.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Theme resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.theme.Theme.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.theme.Theme.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Theme to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.theme.Theme.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Theme that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/theme#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.theme.Theme.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Theme to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.backgroundImageUrl">backgroundImageUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.faviconUrl">faviconUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.links">links</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.logoUrl">logoUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.backgroundImageInput">backgroundImageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.brandIdInput">brandIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.emailTemplateTouchPointVariantInput">emailTemplateTouchPointVariantInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.endUserDashboardTouchPointVariantInput">endUserDashboardTouchPointVariantInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.errorPageTouchPointVariantInput">errorPageTouchPointVariantInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.faviconInput">faviconInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.logoInput">logoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.primaryColorContrastHexInput">primaryColorContrastHexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.primaryColorHexInput">primaryColorHexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.secondaryColorContrastHexInput">secondaryColorContrastHexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.secondaryColorHexInput">secondaryColorHexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.signInPageTouchPointVariantInput">signInPageTouchPointVariantInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.themeIdInput">themeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.backgroundImage">backgroundImage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.brandId">brandId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.emailTemplateTouchPointVariant">emailTemplateTouchPointVariant</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.endUserDashboardTouchPointVariant">endUserDashboardTouchPointVariant</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.errorPageTouchPointVariant">errorPageTouchPointVariant</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.favicon">favicon</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.logo">logo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.primaryColorContrastHex">primaryColorContrastHex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.primaryColorHex">primaryColorHex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.secondaryColorContrastHex">secondaryColorContrastHex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.secondaryColorHex">secondaryColorHex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.signInPageTouchPointVariant">signInPageTouchPointVariant</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.themeId">themeId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.theme.Theme.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.theme.Theme.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.theme.Theme.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.theme.Theme.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.theme.Theme.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.theme.Theme.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.theme.Theme.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.theme.Theme.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.theme.Theme.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.theme.Theme.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.theme.Theme.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.theme.Theme.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.theme.Theme.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.theme.Theme.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backgroundImageUrl`<sup>Required</sup> <a name="backgroundImageUrl" id="@cdktf/provider-okta.theme.Theme.property.backgroundImageUrl"></a>

```java
public java.lang.String getBackgroundImageUrl();
```

- *Type:* java.lang.String

---

##### `faviconUrl`<sup>Required</sup> <a name="faviconUrl" id="@cdktf/provider-okta.theme.Theme.property.faviconUrl"></a>

```java
public java.lang.String getFaviconUrl();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.theme.Theme.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-okta.theme.Theme.property.links"></a>

```java
public java.lang.String getLinks();
```

- *Type:* java.lang.String

---

##### `logoUrl`<sup>Required</sup> <a name="logoUrl" id="@cdktf/provider-okta.theme.Theme.property.logoUrl"></a>

```java
public java.lang.String getLogoUrl();
```

- *Type:* java.lang.String

---

##### `backgroundImageInput`<sup>Optional</sup> <a name="backgroundImageInput" id="@cdktf/provider-okta.theme.Theme.property.backgroundImageInput"></a>

```java
public java.lang.String getBackgroundImageInput();
```

- *Type:* java.lang.String

---

##### `brandIdInput`<sup>Optional</sup> <a name="brandIdInput" id="@cdktf/provider-okta.theme.Theme.property.brandIdInput"></a>

```java
public java.lang.String getBrandIdInput();
```

- *Type:* java.lang.String

---

##### `emailTemplateTouchPointVariantInput`<sup>Optional</sup> <a name="emailTemplateTouchPointVariantInput" id="@cdktf/provider-okta.theme.Theme.property.emailTemplateTouchPointVariantInput"></a>

```java
public java.lang.String getEmailTemplateTouchPointVariantInput();
```

- *Type:* java.lang.String

---

##### `endUserDashboardTouchPointVariantInput`<sup>Optional</sup> <a name="endUserDashboardTouchPointVariantInput" id="@cdktf/provider-okta.theme.Theme.property.endUserDashboardTouchPointVariantInput"></a>

```java
public java.lang.String getEndUserDashboardTouchPointVariantInput();
```

- *Type:* java.lang.String

---

##### `errorPageTouchPointVariantInput`<sup>Optional</sup> <a name="errorPageTouchPointVariantInput" id="@cdktf/provider-okta.theme.Theme.property.errorPageTouchPointVariantInput"></a>

```java
public java.lang.String getErrorPageTouchPointVariantInput();
```

- *Type:* java.lang.String

---

##### `faviconInput`<sup>Optional</sup> <a name="faviconInput" id="@cdktf/provider-okta.theme.Theme.property.faviconInput"></a>

```java
public java.lang.String getFaviconInput();
```

- *Type:* java.lang.String

---

##### `logoInput`<sup>Optional</sup> <a name="logoInput" id="@cdktf/provider-okta.theme.Theme.property.logoInput"></a>

```java
public java.lang.String getLogoInput();
```

- *Type:* java.lang.String

---

##### `primaryColorContrastHexInput`<sup>Optional</sup> <a name="primaryColorContrastHexInput" id="@cdktf/provider-okta.theme.Theme.property.primaryColorContrastHexInput"></a>

```java
public java.lang.String getPrimaryColorContrastHexInput();
```

- *Type:* java.lang.String

---

##### `primaryColorHexInput`<sup>Optional</sup> <a name="primaryColorHexInput" id="@cdktf/provider-okta.theme.Theme.property.primaryColorHexInput"></a>

```java
public java.lang.String getPrimaryColorHexInput();
```

- *Type:* java.lang.String

---

##### `secondaryColorContrastHexInput`<sup>Optional</sup> <a name="secondaryColorContrastHexInput" id="@cdktf/provider-okta.theme.Theme.property.secondaryColorContrastHexInput"></a>

```java
public java.lang.String getSecondaryColorContrastHexInput();
```

- *Type:* java.lang.String

---

##### `secondaryColorHexInput`<sup>Optional</sup> <a name="secondaryColorHexInput" id="@cdktf/provider-okta.theme.Theme.property.secondaryColorHexInput"></a>

```java
public java.lang.String getSecondaryColorHexInput();
```

- *Type:* java.lang.String

---

##### `signInPageTouchPointVariantInput`<sup>Optional</sup> <a name="signInPageTouchPointVariantInput" id="@cdktf/provider-okta.theme.Theme.property.signInPageTouchPointVariantInput"></a>

```java
public java.lang.String getSignInPageTouchPointVariantInput();
```

- *Type:* java.lang.String

---

##### `themeIdInput`<sup>Optional</sup> <a name="themeIdInput" id="@cdktf/provider-okta.theme.Theme.property.themeIdInput"></a>

```java
public java.lang.String getThemeIdInput();
```

- *Type:* java.lang.String

---

##### `backgroundImage`<sup>Required</sup> <a name="backgroundImage" id="@cdktf/provider-okta.theme.Theme.property.backgroundImage"></a>

```java
public java.lang.String getBackgroundImage();
```

- *Type:* java.lang.String

---

##### `brandId`<sup>Required</sup> <a name="brandId" id="@cdktf/provider-okta.theme.Theme.property.brandId"></a>

```java
public java.lang.String getBrandId();
```

- *Type:* java.lang.String

---

##### `emailTemplateTouchPointVariant`<sup>Required</sup> <a name="emailTemplateTouchPointVariant" id="@cdktf/provider-okta.theme.Theme.property.emailTemplateTouchPointVariant"></a>

```java
public java.lang.String getEmailTemplateTouchPointVariant();
```

- *Type:* java.lang.String

---

##### `endUserDashboardTouchPointVariant`<sup>Required</sup> <a name="endUserDashboardTouchPointVariant" id="@cdktf/provider-okta.theme.Theme.property.endUserDashboardTouchPointVariant"></a>

```java
public java.lang.String getEndUserDashboardTouchPointVariant();
```

- *Type:* java.lang.String

---

##### `errorPageTouchPointVariant`<sup>Required</sup> <a name="errorPageTouchPointVariant" id="@cdktf/provider-okta.theme.Theme.property.errorPageTouchPointVariant"></a>

```java
public java.lang.String getErrorPageTouchPointVariant();
```

- *Type:* java.lang.String

---

##### `favicon`<sup>Required</sup> <a name="favicon" id="@cdktf/provider-okta.theme.Theme.property.favicon"></a>

```java
public java.lang.String getFavicon();
```

- *Type:* java.lang.String

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktf/provider-okta.theme.Theme.property.logo"></a>

```java
public java.lang.String getLogo();
```

- *Type:* java.lang.String

---

##### `primaryColorContrastHex`<sup>Required</sup> <a name="primaryColorContrastHex" id="@cdktf/provider-okta.theme.Theme.property.primaryColorContrastHex"></a>

```java
public java.lang.String getPrimaryColorContrastHex();
```

- *Type:* java.lang.String

---

##### `primaryColorHex`<sup>Required</sup> <a name="primaryColorHex" id="@cdktf/provider-okta.theme.Theme.property.primaryColorHex"></a>

```java
public java.lang.String getPrimaryColorHex();
```

- *Type:* java.lang.String

---

##### `secondaryColorContrastHex`<sup>Required</sup> <a name="secondaryColorContrastHex" id="@cdktf/provider-okta.theme.Theme.property.secondaryColorContrastHex"></a>

```java
public java.lang.String getSecondaryColorContrastHex();
```

- *Type:* java.lang.String

---

##### `secondaryColorHex`<sup>Required</sup> <a name="secondaryColorHex" id="@cdktf/provider-okta.theme.Theme.property.secondaryColorHex"></a>

```java
public java.lang.String getSecondaryColorHex();
```

- *Type:* java.lang.String

---

##### `signInPageTouchPointVariant`<sup>Required</sup> <a name="signInPageTouchPointVariant" id="@cdktf/provider-okta.theme.Theme.property.signInPageTouchPointVariant"></a>

```java
public java.lang.String getSignInPageTouchPointVariant();
```

- *Type:* java.lang.String

---

##### `themeId`<sup>Required</sup> <a name="themeId" id="@cdktf/provider-okta.theme.Theme.property.themeId"></a>

```java
public java.lang.String getThemeId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.theme.Theme.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ThemeConfig <a name="ThemeConfig" id="@cdktf/provider-okta.theme.ThemeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.theme.ThemeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.theme.ThemeConfig;

ThemeConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .brandId(java.lang.String)
//  .backgroundImage(java.lang.String)
//  .emailTemplateTouchPointVariant(java.lang.String)
//  .endUserDashboardTouchPointVariant(java.lang.String)
//  .errorPageTouchPointVariant(java.lang.String)
//  .favicon(java.lang.String)
//  .logo(java.lang.String)
//  .primaryColorContrastHex(java.lang.String)
//  .primaryColorHex(java.lang.String)
//  .secondaryColorContrastHex(java.lang.String)
//  .secondaryColorHex(java.lang.String)
//  .signInPageTouchPointVariant(java.lang.String)
//  .themeId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.brandId">brandId</a></code> | <code>java.lang.String</code> | Brand ID. |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.backgroundImage">backgroundImage</a></code> | <code>java.lang.String</code> | Path to local file. |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.emailTemplateTouchPointVariant">emailTemplateTouchPointVariant</a></code> | <code>java.lang.String</code> | Variant for email templates (`OKTA_DEFAULT`, `FULL_THEME`). |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.endUserDashboardTouchPointVariant">endUserDashboardTouchPointVariant</a></code> | <code>java.lang.String</code> | Variant for the Okta End-User Dashboard (`OKTA_DEFAULT`, `WHITE_LOGO_BACKGROUND`, `FULL_THEME`, `LOGO_ON_FULL_WHITE_BACKGROUND`). |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.errorPageTouchPointVariant">errorPageTouchPointVariant</a></code> | <code>java.lang.String</code> | Variant for the error page (`OKTA_DEFAULT`, `BACKGROUND_SECONDARY_COLOR`, `BACKGROUND_IMAGE`). |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.favicon">favicon</a></code> | <code>java.lang.String</code> | Path to local file. |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.logo">logo</a></code> | <code>java.lang.String</code> | Path to local file. |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.primaryColorContrastHex">primaryColorContrastHex</a></code> | <code>java.lang.String</code> | Primary color contrast hex code. |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.primaryColorHex">primaryColorHex</a></code> | <code>java.lang.String</code> | Primary color hex code. |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.secondaryColorContrastHex">secondaryColorContrastHex</a></code> | <code>java.lang.String</code> | Secondary color contrast hex code. |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.secondaryColorHex">secondaryColorHex</a></code> | <code>java.lang.String</code> | Secondary color hex code. |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.signInPageTouchPointVariant">signInPageTouchPointVariant</a></code> | <code>java.lang.String</code> | Variant for the Okta Sign-In Page (`OKTA_DEFAULT`, `BACKGROUND_SECONDARY_COLOR`, `BACKGROUND_IMAGE`). |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.themeId">themeId</a></code> | <code>java.lang.String</code> | Theme ID - Note: Okta API for theme only reads and updates therefore the okta_theme resource needs to act as a quasi data source. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.theme.ThemeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.theme.ThemeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.theme.ThemeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.theme.ThemeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.theme.ThemeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.theme.ThemeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.theme.ThemeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `brandId`<sup>Required</sup> <a name="brandId" id="@cdktf/provider-okta.theme.ThemeConfig.property.brandId"></a>

```java
public java.lang.String getBrandId();
```

- *Type:* java.lang.String

Brand ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/theme#brand_id Theme#brand_id}

---

##### `backgroundImage`<sup>Optional</sup> <a name="backgroundImage" id="@cdktf/provider-okta.theme.ThemeConfig.property.backgroundImage"></a>

```java
public java.lang.String getBackgroundImage();
```

- *Type:* java.lang.String

Path to local file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/theme#background_image Theme#background_image}

---

##### `emailTemplateTouchPointVariant`<sup>Optional</sup> <a name="emailTemplateTouchPointVariant" id="@cdktf/provider-okta.theme.ThemeConfig.property.emailTemplateTouchPointVariant"></a>

```java
public java.lang.String getEmailTemplateTouchPointVariant();
```

- *Type:* java.lang.String

Variant for email templates (`OKTA_DEFAULT`, `FULL_THEME`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/theme#email_template_touch_point_variant Theme#email_template_touch_point_variant}

---

##### `endUserDashboardTouchPointVariant`<sup>Optional</sup> <a name="endUserDashboardTouchPointVariant" id="@cdktf/provider-okta.theme.ThemeConfig.property.endUserDashboardTouchPointVariant"></a>

```java
public java.lang.String getEndUserDashboardTouchPointVariant();
```

- *Type:* java.lang.String

Variant for the Okta End-User Dashboard (`OKTA_DEFAULT`, `WHITE_LOGO_BACKGROUND`, `FULL_THEME`, `LOGO_ON_FULL_WHITE_BACKGROUND`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/theme#end_user_dashboard_touch_point_variant Theme#end_user_dashboard_touch_point_variant}

---

##### `errorPageTouchPointVariant`<sup>Optional</sup> <a name="errorPageTouchPointVariant" id="@cdktf/provider-okta.theme.ThemeConfig.property.errorPageTouchPointVariant"></a>

```java
public java.lang.String getErrorPageTouchPointVariant();
```

- *Type:* java.lang.String

Variant for the error page (`OKTA_DEFAULT`, `BACKGROUND_SECONDARY_COLOR`, `BACKGROUND_IMAGE`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/theme#error_page_touch_point_variant Theme#error_page_touch_point_variant}

---

##### `favicon`<sup>Optional</sup> <a name="favicon" id="@cdktf/provider-okta.theme.ThemeConfig.property.favicon"></a>

```java
public java.lang.String getFavicon();
```

- *Type:* java.lang.String

Path to local file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/theme#favicon Theme#favicon}

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.theme.ThemeConfig.property.logo"></a>

```java
public java.lang.String getLogo();
```

- *Type:* java.lang.String

Path to local file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/theme#logo Theme#logo}

---

##### `primaryColorContrastHex`<sup>Optional</sup> <a name="primaryColorContrastHex" id="@cdktf/provider-okta.theme.ThemeConfig.property.primaryColorContrastHex"></a>

```java
public java.lang.String getPrimaryColorContrastHex();
```

- *Type:* java.lang.String

Primary color contrast hex code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/theme#primary_color_contrast_hex Theme#primary_color_contrast_hex}

---

##### `primaryColorHex`<sup>Optional</sup> <a name="primaryColorHex" id="@cdktf/provider-okta.theme.ThemeConfig.property.primaryColorHex"></a>

```java
public java.lang.String getPrimaryColorHex();
```

- *Type:* java.lang.String

Primary color hex code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/theme#primary_color_hex Theme#primary_color_hex}

---

##### `secondaryColorContrastHex`<sup>Optional</sup> <a name="secondaryColorContrastHex" id="@cdktf/provider-okta.theme.ThemeConfig.property.secondaryColorContrastHex"></a>

```java
public java.lang.String getSecondaryColorContrastHex();
```

- *Type:* java.lang.String

Secondary color contrast hex code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/theme#secondary_color_contrast_hex Theme#secondary_color_contrast_hex}

---

##### `secondaryColorHex`<sup>Optional</sup> <a name="secondaryColorHex" id="@cdktf/provider-okta.theme.ThemeConfig.property.secondaryColorHex"></a>

```java
public java.lang.String getSecondaryColorHex();
```

- *Type:* java.lang.String

Secondary color hex code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/theme#secondary_color_hex Theme#secondary_color_hex}

---

##### `signInPageTouchPointVariant`<sup>Optional</sup> <a name="signInPageTouchPointVariant" id="@cdktf/provider-okta.theme.ThemeConfig.property.signInPageTouchPointVariant"></a>

```java
public java.lang.String getSignInPageTouchPointVariant();
```

- *Type:* java.lang.String

Variant for the Okta Sign-In Page (`OKTA_DEFAULT`, `BACKGROUND_SECONDARY_COLOR`, `BACKGROUND_IMAGE`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/theme#sign_in_page_touch_point_variant Theme#sign_in_page_touch_point_variant}

---

##### `themeId`<sup>Optional</sup> <a name="themeId" id="@cdktf/provider-okta.theme.ThemeConfig.property.themeId"></a>

```java
public java.lang.String getThemeId();
```

- *Type:* java.lang.String

Theme ID - Note: Okta API for theme only reads and updates therefore the okta_theme resource needs to act as a quasi data source.

Do this by setting theme_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/theme#theme_id Theme#theme_id}

---



