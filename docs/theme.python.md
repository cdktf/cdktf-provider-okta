# `theme` Submodule <a name="`theme` Submodule" id="@cdktf/provider-okta.theme"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Theme <a name="Theme" id="@cdktf/provider-okta.theme.Theme"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/theme okta_theme}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.theme.Theme.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import theme

theme.Theme(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  brand_id: str,
  background_image: str = None,
  email_template_touch_point_variant: str = None,
  end_user_dashboard_touch_point_variant: str = None,
  error_page_touch_point_variant: str = None,
  favicon: str = None,
  logo: str = None,
  primary_color_contrast_hex: str = None,
  primary_color_hex: str = None,
  secondary_color_contrast_hex: str = None,
  secondary_color_hex: str = None,
  sign_in_page_touch_point_variant: str = None,
  theme_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.brandId">brand_id</a></code> | <code>str</code> | Brand ID. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.backgroundImage">background_image</a></code> | <code>str</code> | Path to local file. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.emailTemplateTouchPointVariant">email_template_touch_point_variant</a></code> | <code>str</code> | Variant for email templates (`OKTA_DEFAULT`, `FULL_THEME`). |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.endUserDashboardTouchPointVariant">end_user_dashboard_touch_point_variant</a></code> | <code>str</code> | Variant for the Okta End-User Dashboard (`OKTA_DEFAULT`, `WHITE_LOGO_BACKGROUND`, `FULL_THEME`, `LOGO_ON_FULL_WHITE_BACKGROUND`). |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.errorPageTouchPointVariant">error_page_touch_point_variant</a></code> | <code>str</code> | Variant for the error page (`OKTA_DEFAULT`, `BACKGROUND_SECONDARY_COLOR`, `BACKGROUND_IMAGE`). |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.favicon">favicon</a></code> | <code>str</code> | Path to local file. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.logo">logo</a></code> | <code>str</code> | Path to local file. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.primaryColorContrastHex">primary_color_contrast_hex</a></code> | <code>str</code> | Primary color contrast hex code. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.primaryColorHex">primary_color_hex</a></code> | <code>str</code> | Primary color hex code. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.secondaryColorContrastHex">secondary_color_contrast_hex</a></code> | <code>str</code> | Secondary color contrast hex code. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.secondaryColorHex">secondary_color_hex</a></code> | <code>str</code> | Secondary color hex code. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.signInPageTouchPointVariant">sign_in_page_touch_point_variant</a></code> | <code>str</code> | Variant for the Okta Sign-In Page (`OKTA_DEFAULT`, `BACKGROUND_SECONDARY_COLOR`, `BACKGROUND_IMAGE`). |
| <code><a href="#@cdktf/provider-okta.theme.Theme.Initializer.parameter.themeId">theme_id</a></code> | <code>str</code> | Theme ID - Note: Okta API for theme only reads and updates therefore the okta_theme resource needs to act as a quasi data source. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `brand_id`<sup>Required</sup> <a name="brand_id" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.brandId"></a>

- *Type:* str

Brand ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#brand_id Theme#brand_id}

---

##### `background_image`<sup>Optional</sup> <a name="background_image" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.backgroundImage"></a>

- *Type:* str

Path to local file.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#background_image Theme#background_image}

---

##### `email_template_touch_point_variant`<sup>Optional</sup> <a name="email_template_touch_point_variant" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.emailTemplateTouchPointVariant"></a>

- *Type:* str

Variant for email templates (`OKTA_DEFAULT`, `FULL_THEME`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#email_template_touch_point_variant Theme#email_template_touch_point_variant}

---

##### `end_user_dashboard_touch_point_variant`<sup>Optional</sup> <a name="end_user_dashboard_touch_point_variant" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.endUserDashboardTouchPointVariant"></a>

- *Type:* str

Variant for the Okta End-User Dashboard (`OKTA_DEFAULT`, `WHITE_LOGO_BACKGROUND`, `FULL_THEME`, `LOGO_ON_FULL_WHITE_BACKGROUND`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#end_user_dashboard_touch_point_variant Theme#end_user_dashboard_touch_point_variant}

---

##### `error_page_touch_point_variant`<sup>Optional</sup> <a name="error_page_touch_point_variant" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.errorPageTouchPointVariant"></a>

- *Type:* str

Variant for the error page (`OKTA_DEFAULT`, `BACKGROUND_SECONDARY_COLOR`, `BACKGROUND_IMAGE`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#error_page_touch_point_variant Theme#error_page_touch_point_variant}

---

##### `favicon`<sup>Optional</sup> <a name="favicon" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.favicon"></a>

- *Type:* str

Path to local file.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#favicon Theme#favicon}

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.logo"></a>

- *Type:* str

Path to local file.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#logo Theme#logo}

---

##### `primary_color_contrast_hex`<sup>Optional</sup> <a name="primary_color_contrast_hex" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.primaryColorContrastHex"></a>

- *Type:* str

Primary color contrast hex code.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#primary_color_contrast_hex Theme#primary_color_contrast_hex}

---

##### `primary_color_hex`<sup>Optional</sup> <a name="primary_color_hex" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.primaryColorHex"></a>

- *Type:* str

Primary color hex code.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#primary_color_hex Theme#primary_color_hex}

---

##### `secondary_color_contrast_hex`<sup>Optional</sup> <a name="secondary_color_contrast_hex" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.secondaryColorContrastHex"></a>

- *Type:* str

Secondary color contrast hex code.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#secondary_color_contrast_hex Theme#secondary_color_contrast_hex}

---

##### `secondary_color_hex`<sup>Optional</sup> <a name="secondary_color_hex" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.secondaryColorHex"></a>

- *Type:* str

Secondary color hex code.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#secondary_color_hex Theme#secondary_color_hex}

---

##### `sign_in_page_touch_point_variant`<sup>Optional</sup> <a name="sign_in_page_touch_point_variant" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.signInPageTouchPointVariant"></a>

- *Type:* str

Variant for the Okta Sign-In Page (`OKTA_DEFAULT`, `BACKGROUND_SECONDARY_COLOR`, `BACKGROUND_IMAGE`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#sign_in_page_touch_point_variant Theme#sign_in_page_touch_point_variant}

---

##### `theme_id`<sup>Optional</sup> <a name="theme_id" id="@cdktf/provider-okta.theme.Theme.Initializer.parameter.themeId"></a>

- *Type:* str

Theme ID - Note: Okta API for theme only reads and updates therefore the okta_theme resource needs to act as a quasi data source.

Do this by setting theme_id.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#theme_id Theme#theme_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.theme.Theme.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.resetBackgroundImage">reset_background_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.resetEmailTemplateTouchPointVariant">reset_email_template_touch_point_variant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.resetEndUserDashboardTouchPointVariant">reset_end_user_dashboard_touch_point_variant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.resetErrorPageTouchPointVariant">reset_error_page_touch_point_variant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.resetFavicon">reset_favicon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.resetLogo">reset_logo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.resetPrimaryColorContrastHex">reset_primary_color_contrast_hex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.resetPrimaryColorHex">reset_primary_color_hex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.resetSecondaryColorContrastHex">reset_secondary_color_contrast_hex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.resetSecondaryColorHex">reset_secondary_color_hex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.resetSignInPageTouchPointVariant">reset_sign_in_page_touch_point_variant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.resetThemeId">reset_theme_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.theme.Theme.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.theme.Theme.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.theme.Theme.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.theme.Theme.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.theme.Theme.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.theme.Theme.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.theme.Theme.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.theme.Theme.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.theme.Theme.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.theme.Theme.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.theme.Theme.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.theme.Theme.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.theme.Theme.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.theme.Theme.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.theme.Theme.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.theme.Theme.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.theme.Theme.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.theme.Theme.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.theme.Theme.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.theme.Theme.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.theme.Theme.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.theme.Theme.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.theme.Theme.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.theme.Theme.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.theme.Theme.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.theme.Theme.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.theme.Theme.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.theme.Theme.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.theme.Theme.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_background_image` <a name="reset_background_image" id="@cdktf/provider-okta.theme.Theme.resetBackgroundImage"></a>

```python
def reset_background_image() -> None
```

##### `reset_email_template_touch_point_variant` <a name="reset_email_template_touch_point_variant" id="@cdktf/provider-okta.theme.Theme.resetEmailTemplateTouchPointVariant"></a>

```python
def reset_email_template_touch_point_variant() -> None
```

##### `reset_end_user_dashboard_touch_point_variant` <a name="reset_end_user_dashboard_touch_point_variant" id="@cdktf/provider-okta.theme.Theme.resetEndUserDashboardTouchPointVariant"></a>

```python
def reset_end_user_dashboard_touch_point_variant() -> None
```

##### `reset_error_page_touch_point_variant` <a name="reset_error_page_touch_point_variant" id="@cdktf/provider-okta.theme.Theme.resetErrorPageTouchPointVariant"></a>

```python
def reset_error_page_touch_point_variant() -> None
```

##### `reset_favicon` <a name="reset_favicon" id="@cdktf/provider-okta.theme.Theme.resetFavicon"></a>

```python
def reset_favicon() -> None
```

##### `reset_logo` <a name="reset_logo" id="@cdktf/provider-okta.theme.Theme.resetLogo"></a>

```python
def reset_logo() -> None
```

##### `reset_primary_color_contrast_hex` <a name="reset_primary_color_contrast_hex" id="@cdktf/provider-okta.theme.Theme.resetPrimaryColorContrastHex"></a>

```python
def reset_primary_color_contrast_hex() -> None
```

##### `reset_primary_color_hex` <a name="reset_primary_color_hex" id="@cdktf/provider-okta.theme.Theme.resetPrimaryColorHex"></a>

```python
def reset_primary_color_hex() -> None
```

##### `reset_secondary_color_contrast_hex` <a name="reset_secondary_color_contrast_hex" id="@cdktf/provider-okta.theme.Theme.resetSecondaryColorContrastHex"></a>

```python
def reset_secondary_color_contrast_hex() -> None
```

##### `reset_secondary_color_hex` <a name="reset_secondary_color_hex" id="@cdktf/provider-okta.theme.Theme.resetSecondaryColorHex"></a>

```python
def reset_secondary_color_hex() -> None
```

##### `reset_sign_in_page_touch_point_variant` <a name="reset_sign_in_page_touch_point_variant" id="@cdktf/provider-okta.theme.Theme.resetSignInPageTouchPointVariant"></a>

```python
def reset_sign_in_page_touch_point_variant() -> None
```

##### `reset_theme_id` <a name="reset_theme_id" id="@cdktf/provider-okta.theme.Theme.resetThemeId"></a>

```python
def reset_theme_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.theme.Theme.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.theme.Theme.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import theme

theme.Theme.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.theme.Theme.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import theme

theme.Theme.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.theme.Theme.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.theme.Theme.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import theme

theme.Theme.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.theme.Theme.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.backgroundImageUrl">background_image_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.faviconUrl">favicon_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.links">links</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.logoUrl">logo_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.backgroundImageInput">background_image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.brandIdInput">brand_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.emailTemplateTouchPointVariantInput">email_template_touch_point_variant_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.endUserDashboardTouchPointVariantInput">end_user_dashboard_touch_point_variant_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.errorPageTouchPointVariantInput">error_page_touch_point_variant_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.faviconInput">favicon_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.logoInput">logo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.primaryColorContrastHexInput">primary_color_contrast_hex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.primaryColorHexInput">primary_color_hex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.secondaryColorContrastHexInput">secondary_color_contrast_hex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.secondaryColorHexInput">secondary_color_hex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.signInPageTouchPointVariantInput">sign_in_page_touch_point_variant_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.themeIdInput">theme_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.backgroundImage">background_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.brandId">brand_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.emailTemplateTouchPointVariant">email_template_touch_point_variant</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.endUserDashboardTouchPointVariant">end_user_dashboard_touch_point_variant</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.errorPageTouchPointVariant">error_page_touch_point_variant</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.favicon">favicon</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.logo">logo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.primaryColorContrastHex">primary_color_contrast_hex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.primaryColorHex">primary_color_hex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.secondaryColorContrastHex">secondary_color_contrast_hex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.secondaryColorHex">secondary_color_hex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.signInPageTouchPointVariant">sign_in_page_touch_point_variant</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.themeId">theme_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.theme.Theme.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.theme.Theme.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.theme.Theme.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.theme.Theme.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.theme.Theme.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.theme.Theme.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.theme.Theme.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.theme.Theme.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.theme.Theme.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.theme.Theme.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.theme.Theme.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.theme.Theme.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.theme.Theme.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.theme.Theme.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `background_image_url`<sup>Required</sup> <a name="background_image_url" id="@cdktf/provider-okta.theme.Theme.property.backgroundImageUrl"></a>

```python
background_image_url: str
```

- *Type:* str

---

##### `favicon_url`<sup>Required</sup> <a name="favicon_url" id="@cdktf/provider-okta.theme.Theme.property.faviconUrl"></a>

```python
favicon_url: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.theme.Theme.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-okta.theme.Theme.property.links"></a>

```python
links: str
```

- *Type:* str

---

##### `logo_url`<sup>Required</sup> <a name="logo_url" id="@cdktf/provider-okta.theme.Theme.property.logoUrl"></a>

```python
logo_url: str
```

- *Type:* str

---

##### `background_image_input`<sup>Optional</sup> <a name="background_image_input" id="@cdktf/provider-okta.theme.Theme.property.backgroundImageInput"></a>

```python
background_image_input: str
```

- *Type:* str

---

##### `brand_id_input`<sup>Optional</sup> <a name="brand_id_input" id="@cdktf/provider-okta.theme.Theme.property.brandIdInput"></a>

```python
brand_id_input: str
```

- *Type:* str

---

##### `email_template_touch_point_variant_input`<sup>Optional</sup> <a name="email_template_touch_point_variant_input" id="@cdktf/provider-okta.theme.Theme.property.emailTemplateTouchPointVariantInput"></a>

```python
email_template_touch_point_variant_input: str
```

- *Type:* str

---

##### `end_user_dashboard_touch_point_variant_input`<sup>Optional</sup> <a name="end_user_dashboard_touch_point_variant_input" id="@cdktf/provider-okta.theme.Theme.property.endUserDashboardTouchPointVariantInput"></a>

```python
end_user_dashboard_touch_point_variant_input: str
```

- *Type:* str

---

##### `error_page_touch_point_variant_input`<sup>Optional</sup> <a name="error_page_touch_point_variant_input" id="@cdktf/provider-okta.theme.Theme.property.errorPageTouchPointVariantInput"></a>

```python
error_page_touch_point_variant_input: str
```

- *Type:* str

---

##### `favicon_input`<sup>Optional</sup> <a name="favicon_input" id="@cdktf/provider-okta.theme.Theme.property.faviconInput"></a>

```python
favicon_input: str
```

- *Type:* str

---

##### `logo_input`<sup>Optional</sup> <a name="logo_input" id="@cdktf/provider-okta.theme.Theme.property.logoInput"></a>

```python
logo_input: str
```

- *Type:* str

---

##### `primary_color_contrast_hex_input`<sup>Optional</sup> <a name="primary_color_contrast_hex_input" id="@cdktf/provider-okta.theme.Theme.property.primaryColorContrastHexInput"></a>

```python
primary_color_contrast_hex_input: str
```

- *Type:* str

---

##### `primary_color_hex_input`<sup>Optional</sup> <a name="primary_color_hex_input" id="@cdktf/provider-okta.theme.Theme.property.primaryColorHexInput"></a>

```python
primary_color_hex_input: str
```

- *Type:* str

---

##### `secondary_color_contrast_hex_input`<sup>Optional</sup> <a name="secondary_color_contrast_hex_input" id="@cdktf/provider-okta.theme.Theme.property.secondaryColorContrastHexInput"></a>

```python
secondary_color_contrast_hex_input: str
```

- *Type:* str

---

##### `secondary_color_hex_input`<sup>Optional</sup> <a name="secondary_color_hex_input" id="@cdktf/provider-okta.theme.Theme.property.secondaryColorHexInput"></a>

```python
secondary_color_hex_input: str
```

- *Type:* str

---

##### `sign_in_page_touch_point_variant_input`<sup>Optional</sup> <a name="sign_in_page_touch_point_variant_input" id="@cdktf/provider-okta.theme.Theme.property.signInPageTouchPointVariantInput"></a>

```python
sign_in_page_touch_point_variant_input: str
```

- *Type:* str

---

##### `theme_id_input`<sup>Optional</sup> <a name="theme_id_input" id="@cdktf/provider-okta.theme.Theme.property.themeIdInput"></a>

```python
theme_id_input: str
```

- *Type:* str

---

##### `background_image`<sup>Required</sup> <a name="background_image" id="@cdktf/provider-okta.theme.Theme.property.backgroundImage"></a>

```python
background_image: str
```

- *Type:* str

---

##### `brand_id`<sup>Required</sup> <a name="brand_id" id="@cdktf/provider-okta.theme.Theme.property.brandId"></a>

```python
brand_id: str
```

- *Type:* str

---

##### `email_template_touch_point_variant`<sup>Required</sup> <a name="email_template_touch_point_variant" id="@cdktf/provider-okta.theme.Theme.property.emailTemplateTouchPointVariant"></a>

```python
email_template_touch_point_variant: str
```

- *Type:* str

---

##### `end_user_dashboard_touch_point_variant`<sup>Required</sup> <a name="end_user_dashboard_touch_point_variant" id="@cdktf/provider-okta.theme.Theme.property.endUserDashboardTouchPointVariant"></a>

```python
end_user_dashboard_touch_point_variant: str
```

- *Type:* str

---

##### `error_page_touch_point_variant`<sup>Required</sup> <a name="error_page_touch_point_variant" id="@cdktf/provider-okta.theme.Theme.property.errorPageTouchPointVariant"></a>

```python
error_page_touch_point_variant: str
```

- *Type:* str

---

##### `favicon`<sup>Required</sup> <a name="favicon" id="@cdktf/provider-okta.theme.Theme.property.favicon"></a>

```python
favicon: str
```

- *Type:* str

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktf/provider-okta.theme.Theme.property.logo"></a>

```python
logo: str
```

- *Type:* str

---

##### `primary_color_contrast_hex`<sup>Required</sup> <a name="primary_color_contrast_hex" id="@cdktf/provider-okta.theme.Theme.property.primaryColorContrastHex"></a>

```python
primary_color_contrast_hex: str
```

- *Type:* str

---

##### `primary_color_hex`<sup>Required</sup> <a name="primary_color_hex" id="@cdktf/provider-okta.theme.Theme.property.primaryColorHex"></a>

```python
primary_color_hex: str
```

- *Type:* str

---

##### `secondary_color_contrast_hex`<sup>Required</sup> <a name="secondary_color_contrast_hex" id="@cdktf/provider-okta.theme.Theme.property.secondaryColorContrastHex"></a>

```python
secondary_color_contrast_hex: str
```

- *Type:* str

---

##### `secondary_color_hex`<sup>Required</sup> <a name="secondary_color_hex" id="@cdktf/provider-okta.theme.Theme.property.secondaryColorHex"></a>

```python
secondary_color_hex: str
```

- *Type:* str

---

##### `sign_in_page_touch_point_variant`<sup>Required</sup> <a name="sign_in_page_touch_point_variant" id="@cdktf/provider-okta.theme.Theme.property.signInPageTouchPointVariant"></a>

```python
sign_in_page_touch_point_variant: str
```

- *Type:* str

---

##### `theme_id`<sup>Required</sup> <a name="theme_id" id="@cdktf/provider-okta.theme.Theme.property.themeId"></a>

```python
theme_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.theme.Theme.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.theme.Theme.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ThemeConfig <a name="ThemeConfig" id="@cdktf/provider-okta.theme.ThemeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.theme.ThemeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import theme

theme.ThemeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  brand_id: str,
  background_image: str = None,
  email_template_touch_point_variant: str = None,
  end_user_dashboard_touch_point_variant: str = None,
  error_page_touch_point_variant: str = None,
  favicon: str = None,
  logo: str = None,
  primary_color_contrast_hex: str = None,
  primary_color_hex: str = None,
  secondary_color_contrast_hex: str = None,
  secondary_color_hex: str = None,
  sign_in_page_touch_point_variant: str = None,
  theme_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.brandId">brand_id</a></code> | <code>str</code> | Brand ID. |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.backgroundImage">background_image</a></code> | <code>str</code> | Path to local file. |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.emailTemplateTouchPointVariant">email_template_touch_point_variant</a></code> | <code>str</code> | Variant for email templates (`OKTA_DEFAULT`, `FULL_THEME`). |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.endUserDashboardTouchPointVariant">end_user_dashboard_touch_point_variant</a></code> | <code>str</code> | Variant for the Okta End-User Dashboard (`OKTA_DEFAULT`, `WHITE_LOGO_BACKGROUND`, `FULL_THEME`, `LOGO_ON_FULL_WHITE_BACKGROUND`). |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.errorPageTouchPointVariant">error_page_touch_point_variant</a></code> | <code>str</code> | Variant for the error page (`OKTA_DEFAULT`, `BACKGROUND_SECONDARY_COLOR`, `BACKGROUND_IMAGE`). |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.favicon">favicon</a></code> | <code>str</code> | Path to local file. |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.logo">logo</a></code> | <code>str</code> | Path to local file. |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.primaryColorContrastHex">primary_color_contrast_hex</a></code> | <code>str</code> | Primary color contrast hex code. |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.primaryColorHex">primary_color_hex</a></code> | <code>str</code> | Primary color hex code. |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.secondaryColorContrastHex">secondary_color_contrast_hex</a></code> | <code>str</code> | Secondary color contrast hex code. |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.secondaryColorHex">secondary_color_hex</a></code> | <code>str</code> | Secondary color hex code. |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.signInPageTouchPointVariant">sign_in_page_touch_point_variant</a></code> | <code>str</code> | Variant for the Okta Sign-In Page (`OKTA_DEFAULT`, `BACKGROUND_SECONDARY_COLOR`, `BACKGROUND_IMAGE`). |
| <code><a href="#@cdktf/provider-okta.theme.ThemeConfig.property.themeId">theme_id</a></code> | <code>str</code> | Theme ID - Note: Okta API for theme only reads and updates therefore the okta_theme resource needs to act as a quasi data source. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.theme.ThemeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.theme.ThemeConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.theme.ThemeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.theme.ThemeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.theme.ThemeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.theme.ThemeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.theme.ThemeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `brand_id`<sup>Required</sup> <a name="brand_id" id="@cdktf/provider-okta.theme.ThemeConfig.property.brandId"></a>

```python
brand_id: str
```

- *Type:* str

Brand ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#brand_id Theme#brand_id}

---

##### `background_image`<sup>Optional</sup> <a name="background_image" id="@cdktf/provider-okta.theme.ThemeConfig.property.backgroundImage"></a>

```python
background_image: str
```

- *Type:* str

Path to local file.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#background_image Theme#background_image}

---

##### `email_template_touch_point_variant`<sup>Optional</sup> <a name="email_template_touch_point_variant" id="@cdktf/provider-okta.theme.ThemeConfig.property.emailTemplateTouchPointVariant"></a>

```python
email_template_touch_point_variant: str
```

- *Type:* str

Variant for email templates (`OKTA_DEFAULT`, `FULL_THEME`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#email_template_touch_point_variant Theme#email_template_touch_point_variant}

---

##### `end_user_dashboard_touch_point_variant`<sup>Optional</sup> <a name="end_user_dashboard_touch_point_variant" id="@cdktf/provider-okta.theme.ThemeConfig.property.endUserDashboardTouchPointVariant"></a>

```python
end_user_dashboard_touch_point_variant: str
```

- *Type:* str

Variant for the Okta End-User Dashboard (`OKTA_DEFAULT`, `WHITE_LOGO_BACKGROUND`, `FULL_THEME`, `LOGO_ON_FULL_WHITE_BACKGROUND`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#end_user_dashboard_touch_point_variant Theme#end_user_dashboard_touch_point_variant}

---

##### `error_page_touch_point_variant`<sup>Optional</sup> <a name="error_page_touch_point_variant" id="@cdktf/provider-okta.theme.ThemeConfig.property.errorPageTouchPointVariant"></a>

```python
error_page_touch_point_variant: str
```

- *Type:* str

Variant for the error page (`OKTA_DEFAULT`, `BACKGROUND_SECONDARY_COLOR`, `BACKGROUND_IMAGE`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#error_page_touch_point_variant Theme#error_page_touch_point_variant}

---

##### `favicon`<sup>Optional</sup> <a name="favicon" id="@cdktf/provider-okta.theme.ThemeConfig.property.favicon"></a>

```python
favicon: str
```

- *Type:* str

Path to local file.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#favicon Theme#favicon}

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.theme.ThemeConfig.property.logo"></a>

```python
logo: str
```

- *Type:* str

Path to local file.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#logo Theme#logo}

---

##### `primary_color_contrast_hex`<sup>Optional</sup> <a name="primary_color_contrast_hex" id="@cdktf/provider-okta.theme.ThemeConfig.property.primaryColorContrastHex"></a>

```python
primary_color_contrast_hex: str
```

- *Type:* str

Primary color contrast hex code.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#primary_color_contrast_hex Theme#primary_color_contrast_hex}

---

##### `primary_color_hex`<sup>Optional</sup> <a name="primary_color_hex" id="@cdktf/provider-okta.theme.ThemeConfig.property.primaryColorHex"></a>

```python
primary_color_hex: str
```

- *Type:* str

Primary color hex code.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#primary_color_hex Theme#primary_color_hex}

---

##### `secondary_color_contrast_hex`<sup>Optional</sup> <a name="secondary_color_contrast_hex" id="@cdktf/provider-okta.theme.ThemeConfig.property.secondaryColorContrastHex"></a>

```python
secondary_color_contrast_hex: str
```

- *Type:* str

Secondary color contrast hex code.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#secondary_color_contrast_hex Theme#secondary_color_contrast_hex}

---

##### `secondary_color_hex`<sup>Optional</sup> <a name="secondary_color_hex" id="@cdktf/provider-okta.theme.ThemeConfig.property.secondaryColorHex"></a>

```python
secondary_color_hex: str
```

- *Type:* str

Secondary color hex code.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#secondary_color_hex Theme#secondary_color_hex}

---

##### `sign_in_page_touch_point_variant`<sup>Optional</sup> <a name="sign_in_page_touch_point_variant" id="@cdktf/provider-okta.theme.ThemeConfig.property.signInPageTouchPointVariant"></a>

```python
sign_in_page_touch_point_variant: str
```

- *Type:* str

Variant for the Okta Sign-In Page (`OKTA_DEFAULT`, `BACKGROUND_SECONDARY_COLOR`, `BACKGROUND_IMAGE`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#sign_in_page_touch_point_variant Theme#sign_in_page_touch_point_variant}

---

##### `theme_id`<sup>Optional</sup> <a name="theme_id" id="@cdktf/provider-okta.theme.ThemeConfig.property.themeId"></a>

```python
theme_id: str
```

- *Type:* str

Theme ID - Note: Okta API for theme only reads and updates therefore the okta_theme resource needs to act as a quasi data source.

Do this by setting theme_id.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/theme#theme_id Theme#theme_id}

---


