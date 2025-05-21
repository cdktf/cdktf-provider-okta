# `captchaOrgWideSettings` Submodule <a name="`captchaOrgWideSettings` Submodule" id="@cdktf/provider-okta.captchaOrgWideSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CaptchaOrgWideSettings <a name="CaptchaOrgWideSettings" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/captcha_org_wide_settings okta_captcha_org_wide_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import captcha_org_wide_settings

captchaOrgWideSettings.CaptchaOrgWideSettings(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  captcha_id: str = None,
  enabled_for: typing.List[str] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.captchaId">captcha_id</a></code> | <code>str</code> | Array of pages that have CAPTCHA enabled. Valid values: `SSR`, `SSPR` and `SIGN_IN`. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.enabledFor">enabled_for</a></code> | <code>typing.List[str]</code> | Set of pages that have CAPTCHA enabled. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/captcha_org_wide_settings#id CaptchaOrgWideSettings#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `captcha_id`<sup>Optional</sup> <a name="captcha_id" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.captchaId"></a>

- *Type:* str

Array of pages that have CAPTCHA enabled. Valid values: `SSR`, `SSPR` and `SIGN_IN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/captcha_org_wide_settings#captcha_id CaptchaOrgWideSettings#captcha_id}

---

##### `enabled_for`<sup>Optional</sup> <a name="enabled_for" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.enabledFor"></a>

- *Type:* typing.List[str]

Set of pages that have CAPTCHA enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/captcha_org_wide_settings#enabled_for CaptchaOrgWideSettings#enabled_for}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/captcha_org_wide_settings#id CaptchaOrgWideSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.resetCaptchaId">reset_captcha_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.resetEnabledFor">reset_enabled_for</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_captcha_id` <a name="reset_captcha_id" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.resetCaptchaId"></a>

```python
def reset_captcha_id() -> None
```

##### `reset_enabled_for` <a name="reset_enabled_for" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.resetEnabledFor"></a>

```python
def reset_enabled_for() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CaptchaOrgWideSettings resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import captcha_org_wide_settings

captchaOrgWideSettings.CaptchaOrgWideSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import captcha_org_wide_settings

captchaOrgWideSettings.CaptchaOrgWideSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import captcha_org_wide_settings

captchaOrgWideSettings.CaptchaOrgWideSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_okta import captcha_org_wide_settings

captchaOrgWideSettings.CaptchaOrgWideSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CaptchaOrgWideSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CaptchaOrgWideSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CaptchaOrgWideSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/captcha_org_wide_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CaptchaOrgWideSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.captchaIdInput">captcha_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.enabledForInput">enabled_for_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.captchaId">captcha_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.enabledFor">enabled_for</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `captcha_id_input`<sup>Optional</sup> <a name="captcha_id_input" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.captchaIdInput"></a>

```python
captcha_id_input: str
```

- *Type:* str

---

##### `enabled_for_input`<sup>Optional</sup> <a name="enabled_for_input" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.enabledForInput"></a>

```python
enabled_for_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `captcha_id`<sup>Required</sup> <a name="captcha_id" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.captchaId"></a>

```python
captcha_id: str
```

- *Type:* str

---

##### `enabled_for`<sup>Required</sup> <a name="enabled_for" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.enabledFor"></a>

```python
enabled_for: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CaptchaOrgWideSettingsConfig <a name="CaptchaOrgWideSettingsConfig" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import captcha_org_wide_settings

captchaOrgWideSettings.CaptchaOrgWideSettingsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  captcha_id: str = None,
  enabled_for: typing.List[str] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.captchaId">captcha_id</a></code> | <code>str</code> | Array of pages that have CAPTCHA enabled. Valid values: `SSR`, `SSPR` and `SIGN_IN`. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.enabledFor">enabled_for</a></code> | <code>typing.List[str]</code> | Set of pages that have CAPTCHA enabled. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/captcha_org_wide_settings#id CaptchaOrgWideSettings#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `captcha_id`<sup>Optional</sup> <a name="captcha_id" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.captchaId"></a>

```python
captcha_id: str
```

- *Type:* str

Array of pages that have CAPTCHA enabled. Valid values: `SSR`, `SSPR` and `SIGN_IN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/captcha_org_wide_settings#captcha_id CaptchaOrgWideSettings#captcha_id}

---

##### `enabled_for`<sup>Optional</sup> <a name="enabled_for" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.enabledFor"></a>

```python
enabled_for: typing.List[str]
```

- *Type:* typing.List[str]

Set of pages that have CAPTCHA enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/captcha_org_wide_settings#enabled_for CaptchaOrgWideSettings#enabled_for}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/captcha_org_wide_settings#id CaptchaOrgWideSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



